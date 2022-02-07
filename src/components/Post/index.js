import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context';
// Styles
import { PostContent, PosterDetails, PostData, IconBar, Icons, DatePosted, Comment } from './Post.styles';
// Icons
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { VscEllipsis } from 'react-icons/vsc';
import { BsChatLeftText } from 'react-icons/bs';
import moment from 'moment';


const Post = ({ id, user: pUser, image, caption, aspect_ratio: aspectRatio, users_liked: usersLiked, likes, date_time_posted: date }) => {
    const { user, token } = useAppContext()
    const [postUser, setPostUser] = useState({})
    const [likedUsers, setLikedUsers] = useState(usersLiked)
    const [postLikes, setPostLikes] = useState(likes)

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
            <PosterDetails>
                <div>
                    <a href={`/${postUser.username}`}><img src={`http://localhost:8000${postUser.profile_picture}`} alt='poster profile pic'/></a>
                    <a href={`/${postUser.username}`}><h4>{postUser.username}</h4></a>
                </div>
                <VscEllipsis size='1.15rem' color='black' />
            </PosterDetails>
            <img src={image} alt='post img' className={aspectRatio}/>
            <PostData>
                <IconBar>
                    <Icons>
                        {likedUsers.includes(user.id) 
                            ? <AiFillHeart color='red' size='1.4rem' onClick={handleLikeClick} />
                            : <AiOutlineHeart size='1.4rem' onClick={handleLikeClick} />
                        }
                        <BsChatLeftText />
                    </Icons>
                    <h4>{postLikes} {postLikes === 1 ? 'like' : 'likes'}</h4>
                </IconBar>
                <Comment>{caption}</Comment>
                <DatePosted>Posted: {moment(date).format('MMMM Do YYYY, h:mm:ss a')}</DatePosted>
            </PostData>
        </PostContent>
    )
}

export default Post