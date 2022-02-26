import React from 'react';
import { DataContent, IconBar, Icons, DatePosted, Comment } from './PostData.styles';
// Icons
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsChatLeftText } from 'react-icons/bs';
import moment from 'moment';
import { useAppContext } from '../../context';


const PostData = ({ post, postDataArgs }) => {
    const { caption, date_time_posted: date } = post
    const { likedUsers, postLikes, handleClick, openModal } = postDataArgs
    const { user } = useAppContext()

    return (
        <DataContent>
            <IconBar>
                <Icons>
                    {likedUsers.includes(user.id) 
                        ? <AiFillHeart color='red' size='1.4rem' onClick={handleClick} />
                        : <AiOutlineHeart size='1.4rem' onClick={handleClick} />
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