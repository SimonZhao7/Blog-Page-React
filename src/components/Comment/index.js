import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../../context';
import PostCommentForm from '../PostCommentForm';
import { CommentWrapper, CommentImg, CommentText, CommentActions, ReplyButton, GrayLine } from './Comment.styles';


const Comment = ({ comment, commentFormArgs }) => {
    const { token } = useAppContext()
    const { user: commentUserId, id: commentId, is_reply: isReply, likes } = comment
    const [commentUser, setCommentUser] = useState({})
    const [showReplies, setShowReplies] = useState(false)
    const [replies, setReplies] = useState([])
    const [showReplyInput, setShowReplyInput] = useState(false)
    const replyButton = useRef()

    useEffect(() => {
        const fetchUser = async() => {
            try {
                const response = await fetch(`http://localhost:8000/api/CustomUserAPI/${commentUserId}/`, {
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

        const fetchReplies = async() => {
            try {
                const response = await fetch(`http://localhost:8000/api/CommentAPI/reply_post_id=${commentId}/`, {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                })
                const data = await response.json()
                setReplies(data) 
            } catch (error) {
                console.log(error)
            }
        }
        fetchUser()
        fetchReplies()
    }, [commentId, commentUserId, token])

    return (
        <>
        <CommentWrapper isReply={isReply}>
            <CommentImg>
                <a href={`/${commentUser.username}`}><img src={`http://localhost:8000${commentUser.profile_picture}`} alt='commenter' /></a>
            </CommentImg>
            <CommentText>
                <p><b>{commentUser.username}</b> {comment.message}</p>
                <CommentActions>
                    <ReplyButton>{likes} likes</ReplyButton>
                    <ReplyButton>Like</ReplyButton>
                    <ReplyButton onClick={() => setShowReplyInput(true)} ref={replyButton}>Reply</ReplyButton>
                </CommentActions>
                {showReplyInput && 
                    <PostCommentForm commentFormArgs={commentFormArgs} isReply={true} setReplies={setReplies} comment={comment} setShowReplyInput={setShowReplyInput} />
                }
                {!isReply && replies.length > 0 && !showReplies &&
                    <ReplyButton onClick={() => setShowReplies(true)}>
                        <GrayLine></GrayLine> View Replies ({replies.length})
                    </ReplyButton>
                }
                {!isReply && replies.length > 0 && showReplies &&
                <ReplyButton onClick={() => setShowReplies(false)}>
                    <GrayLine></GrayLine> Hide Replies
                    </ReplyButton>
                }
            </CommentText>
        </CommentWrapper>
        {showReplies && 
            replies.map((reply, index) => (
                <Comment key={index} comment={reply} commentFormArgs={commentFormArgs} />
            ))
        }
        </>
    )
}

export default Comment