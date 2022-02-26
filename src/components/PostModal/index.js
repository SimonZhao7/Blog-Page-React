import React, { useState, useEffect } from 'react';
import { DarkWrapper } from '../ListModal/ListModal.styles';
import { PostModalContent, ImgWrapper, PostImg, CommentSection, CommentList, CommentContent, CommentInput, CommentButton } from './PostModal.styles';
import PosterDetails from '../PosterDetails';
import PostData from '../PostData';
import { useAppContext } from '../../context';


const PostModal = ({ isOpen, closeModal, postUser, post, postDataArgs }) => {
    const { token } = useAppContext()
    const { id, image, aspect_ratio: aspectRatio } = post
    const [comments, setComments] = useState([])

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
                                    <p key={index}>{comment.message}</p>
                                ))
                            }
                        </CommentList>
                        <PostData post={post} postDataArgs={postDataArgs} />
                        <CommentContent>
                            <CommentInput placeholder='Add a comment...' />
                            <CommentButton>Post</CommentButton>
                        </CommentContent>
                    </CommentSection>
                </PostModalContent>
            </DarkWrapper>
        }
        </>
    )
}

export default PostModal