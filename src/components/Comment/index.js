import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../../context';
import PostCommentForm from '../PostCommentForm';
import { CommentWrapper, CommentImg, CommentText, CommentActions, ReplyButton, GrayLine, HeartWrapper } from './Comment.styles';
import { BsHeart, BsHeartFill } from 'react-icons/bs';


const Comment = ({ comment, commentFormArgs }) => {
    const { user, token } = useAppContext()
    const { user: commentUserId, id: commentId, is_reply: isReply, users_liked } = comment
    const [commentUser, setCommentUser] = useState({})
    const [showReplies, setShowReplies] = useState(false)
    const [replies, setReplies] = useState([])
    const [likes, setLikes] = useState(users_liked)
    const [showReplyInput, setShowReplyInput] = useState(false)
    const replyButton = useRef()
    const isLiked = likes.includes(user.id)

    const handleLike = () => {
        const body = new FormData()
        body.append('user_id', user.id)

        fetch(`http://localhost:8000/api/CommentAPI/${commentId}/`, {
            headers: {
                Authorization: `Token ${token}`
            },
            method: 'PUT',
            body: body
        })
        
        if (isLiked) {
            setLikes(prev => prev.filter(like => like !== user.id))
        } else {
            setLikes(prev => [...prev, user.id])
        }
    }

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
                    <ReplyButton>{likes.length} {likes.length === 1 ? 'like' : 'likes'}</ReplyButton>
                    <ReplyButton onClick={handleLike}>{isLiked ? 'Unlike' : 'Like'}</ReplyButton>
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
            <HeartWrapper>
                {isLiked
                ? <BsHeartFill size='0.7rem' color='red' onClick={handleLike}/>
                : <BsHeart size='0.70rem' onClick={handleLike} />
                }
                
            </HeartWrapper>
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