import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context';
// Styles
import { PostContent, PostImgWrapper, PostImg } from './Post.styles';
// Components
import PostModal from '../PostModal';
import PostData from '../PostData';
import PosterDetails from '../PosterDetails';


const Post = ({ post }) => {
    const { user: pUser, image, aspect_ratio: aspectRatio } = post
    const { token } = useAppContext()
    const [postUser, setPostUser] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openCommentModal = () => {
        setIsModalOpen(true)
    }

    const closeCommentModal = () => {
        setIsModalOpen(false)
    }

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
            <PostData post={post} openModal={openCommentModal} />
            <PostModal isOpen={isModalOpen} closeModal={closeCommentModal} postUser={postUser} post={post} />
        </PostContent>
    )
}

export default Post