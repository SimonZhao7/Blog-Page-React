import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../../context';
import { CommentForm, CommentButton, CommentInput } from './PostCommentForm';


export const PostCommentForm = ({ commentFormArgs, isReply, setShowReplyInput, comment, setReplies }) => {
    const { user, token } = useAppContext()
    // Set up states and refs passed from parent
    const { post: { id }, comments, setComments, bottom } = commentFormArgs
    const [commentInput, setCommentInput] = useState("")
    const commentForm = useRef()

    const addComment = async(e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('message', commentInput);
        formData.append('post', id);
        formData.append('user', user.id);
        if (isReply) {
            formData.append('is_reply', true)
            formData.append('replies', comment.id);
        }

        if (commentInput !== "") {
            try {
                const response = await fetch(`http://localhost:8000/api/CommentAPI/`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                    body: formData
                })
                const data = await response.json()
                if (!isReply) {
                    setComments([...comments, data])
                    bottom.current.scrollIntoView({ behavior: 'smooth' })
                } else {
                    setReplies(prev => [...prev, data])
                }
                setCommentInput("")
            } catch (error) {
                console.log(error)
            }    
        }
        
    }

    useEffect(() => {
        const handleClickEvent = (event) => {
            if (isReply) {
                if (!commentForm.current.contains(event.target)) {
                    setShowReplyInput(false)
                }
            }
        }
        window.addEventListener('click', handleClickEvent)
        return () => window.removeEventListener('click', handleClickEvent)
    })

    return (
        <CommentForm onSubmit={addComment} isReply={isReply} ref={commentForm}>
            <CommentInput type='text' placeholder='Add a comment...' value={commentInput} onChange={e => setCommentInput(e.target.value)}/>
            <CommentButton type='submit'>Post</CommentButton>
        </CommentForm>
    )
}

export default PostCommentForm