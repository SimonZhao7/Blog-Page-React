import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context';
import { CommentWrapper, CommentImg, CommentText } from './Comment.styles';


const Comment = ({ comment }) => {
    const { token } = useAppContext()
    const [ commentUser, setCommentUser ] = useState({});

    useEffect(() => {
        const fetchUser = async() => {
            try {
                const response = await fetch(`http://localhost:8000/api/CustomUserAPI/${comment.user}/`, {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                })
                const data = await response.json()
                setCommentUser(data); 
            } catch (error) {
                console.log(error);
            }
        }   
        fetchUser()
    }, [comment.user, token])

    return (
        <>
        <CommentWrapper>
            <CommentImg>
                <a href={`/${commentUser.username}`}><img src={`http://localhost:8000${commentUser.profile_picture}`} alt='commenter' /></a>
            </CommentImg>
            <CommentText>
                <p><b>{commentUser.username}</b> {comment.message}</p>
            </CommentText>
        </CommentWrapper>
        </>
    )
}

export default Comment