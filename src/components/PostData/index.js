import React, { useState } from 'react';
import { DataContent, IconBar, Icons, DatePosted, Comment } from './PostData.styles';
// Icons
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsChatLeftText } from 'react-icons/bs';
import moment from 'moment';
import { useAppContext } from '../../context';


const PostData = ({ post, openModal }) => {
    const { id, caption, users_liked: usersLiked, likes, date_time_posted: date } = post
    const { user, token } = useAppContext()
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

    return (
        <DataContent>
            <IconBar>
                <Icons>
                    {likedUsers.includes(user.id) 
                        ? <AiFillHeart color='red' size='1.4rem' onClick={handleLikeClick} />
                        : <AiOutlineHeart size='1.4rem' onClick={handleLikeClick} />
                    }
                    <BsChatLeftText onClick={openModal ? openModal : ''} />
                </Icons>
                <h4>{postLikes} {postLikes === 1 ? 'like' : 'likes'}</h4>
            </IconBar>
            <Comment>{caption}</Comment>
            <DatePosted>Posted: {moment(date).format('MMMM Do YYYY, h:mm:ss a')}</DatePosted>
        </DataContent>
    )
}

export default PostData