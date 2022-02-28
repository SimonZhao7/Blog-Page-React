import React, { useState, useEffect, useRef, Fragment } from 'react';
import { DarkWrapper } from '../ListModal/ListModal.styles';
import { PostModalContent, ImgWrapper, PostImg, CommentSection, CommentList, CommentForm, CommentInput, CommentButton } from './PostModal.styles';
import Comment from '../Comment';
import PosterDetails from '../PosterDetails';
import PostData from '../PostData';
import { useAppContext } from '../../context';


const PostModal = ({ isOpen, closeModal, postUser, post, postDataArgs }) => {
    const { user, token } = useAppContext()
    const { id, image, aspect_ratio: aspectRatio } = post
    const [commentInput, setCommentInput] = useState("");
    const [comments, setComments] = useState([])
    const bottom = useRef()

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

    const addComment = async(e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('message', commentInput);
        formData.append('post', id);
        formData.append('user', user.id);

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
                setComments([...comments, data])
                setCommentInput("")
                bottom.current.scrollIntoView({ behavior: 'smooth' })
            } catch (error) {
                console.log(error)
            }    
        }
        
    }

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
                                            <Comment comment={comment} />
                                            :
                                            <Comment comment={comment} />
                                        }
                                    </Fragment>
                                ))
                            }
                            <div ref={bottom}></div>
                        </CommentList>
                        <PostData post={post} postDataArgs={postDataArgs} />
                        <CommentForm onSubmit={addComment}>
                            <CommentInput type='text' placeholder='Add a comment...' value={commentInput} onChange={e => setCommentInput(e.target.value)}/>
                            <CommentButton type='submit'>Post</CommentButton>
                        </CommentForm>
                    </CommentSection>
                </PostModalContent>
            </DarkWrapper>
        }
        </>
    )
}

export default PostModal