import React, { useState, useEffect, useRef, Fragment } from 'react';
import { DarkWrapper } from '../ListModal/ListModal.styles';
import { PostModalContent, ImgWrapper, PostImg, CommentSection, CommentList } from './PostModal.styles';
import Comment from '../Comment';
import PosterDetails from '../PosterDetails';
import PostData from '../PostData';
import PostCommentForm from '../PostCommentForm';
import { useAppContext } from '../../context';


const PostModal = ({ isOpen, closeModal, postUser, post, postDataArgs }) => {
    const { token } = useAppContext()
    const { id, image, aspect_ratio: aspectRatio } = post
    const [comments, setComments] = useState([])
    const bottom = useRef()
    const commentFormArgs = {post: post, comments: comments, setComments: setComments, bottom: bottom}

    useEffect(() => {
        const handleClickEvent = (event) => {
            // Equal to DarkWrapper id
            if (event.target.id === 'wrapper-dark') {
                closeModal()
            }
        }

        const fetchComments = async() => {
            const response = await fetch(`http://localhost:8000/api/CommentAPI/post_id=${id}/`, {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
            const data = await response.json()
            setComments(data)
        }   
    
        window.addEventListener('click', handleClickEvent)
        fetchComments()
        return () => {
            window.removeEventListener('click', handleClickEvent)
        }
    }, [closeModal, id, token])

    return (
        <>
        {isOpen && 
            <DarkWrapper id='wrapper-dark'>
                <PostModalContent>
                    <ImgWrapper>
                        <PostImg src={image} alt='post detail' className={aspectRatio} />
                    </ImgWrapper>                
                    <CommentSection>
                        <PosterDetails postUser={postUser} />
                        <CommentList>
                            {comments.length > 0 &&
                                comments.map((comment, index) => (
                                    <Fragment key={index}>
                                        {index < comments.length - 1 
                                            ?
                                            <Comment comment={comment} commentFormArgs={commentFormArgs} />
                                            :
                                            <Comment comment={comment} commentFormArgs={commentFormArgs} />
                                        }
                                    </Fragment>
                                ))
                            }
                            <div ref={bottom}></div>
                        </CommentList>
                        <PostData post={post} postDataArgs={postDataArgs} />
                        <PostCommentForm commentFormArgs={commentFormArgs} />
                    </CommentSection>
                </PostModalContent>
            </DarkWrapper>
        }
        </>
    )
}

export default PostModal