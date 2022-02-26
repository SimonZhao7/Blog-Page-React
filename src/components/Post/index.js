import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context';
// Styles
import { PostContent, PostImgWrapper, PostImg } from './Post.styles';
// Components
import PostModal from '../PostModal';
import PostData from '../PostData';
import PosterDetails from '../PosterDetails';


const Post = ({ post }) => {
    const { user: pUser, image, aspect_ratio: aspectRatio, id, users_liked: usersLiked, likes } = post
    const { user, token } = useAppContext()
    const [postUser, setPostUser] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [likedUsers, setLikedUsers] = useState(usersLiked)
    const [postLikes, setPostLikes] = useState(likes)

    const openCommentModal = () => {
        setIsModalOpen(true)
    }

    const closeCommentModal = () => {
        setIsModalOpen(false)
    }

    const handleLikeClick = () => {
        const data = new FormData()
        data.append('user_id', user.id)
        fetch(`http://localhost:8000/api/PostAPI/${id}/`, {
            method: 'PUT',
            headers: {Authorization: `Token ${token}`},
            body: data
        })
        
        if (likedUsers.includes(user.id)) {
            setLikedUsers(likedUsers.filter(likeUser => likeUser !== user.id))
            setPostLikes(prev => prev - 1)
        } else {
            setLikedUsers([...likedUsers, user.id])
            setPostLikes(prev => prev + 1)
        }
    }

    // Reducing Line Length When Passing Variables Downward
    const postDataArgs = {likedUsers: likedUsers, postLikes: postLikes, handleClick: handleLikeClick, openModal: openCommentModal}

    useEffect(() => {
        const fetchUser = () => {
            fetch(`http://localhost:8000/api/CustomUserAPI/${pUser}/`, {
                headers: {Authorization: `Token ${token}`}
            })
                .then(response => response.json())
                .then(data => {
                    setPostUser(data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        fetchUser()
    }, [pUser, token])

    return (
        <PostContent>
            <PosterDetails postUser={postUser} />
            <PostImgWrapper>
                <PostImg src={image} alt='post img' className={aspectRatio}/>
            </PostImgWrapper>
            <PostData post={post} postDataArgs={postDataArgs} />
            <PostModal isOpen={isModalOpen} closeModal={closeCommentModal} postUser={postUser} post={post} postDataArgs={postDataArgs} />
        </PostContent>
    )
}

export default Post