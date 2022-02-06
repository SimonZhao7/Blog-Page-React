import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GiCancel } from 'react-icons/gi';
import { useProfileContext } from '../../context';
// Styles
import { DarkWrapper, ModalContent, IconWrapper, UserContent, UserImage } from './ListModal.styles';
// Components
import Spinner from '../Spinner';
import FollowButton from '../FollowButton';

// use a useEffect and change the whole list into user objs
const ListModal = ({ type }) => {
    const { user, token, viewedId, followers, following, closeFollowingModal, closeFollowersModal } = useProfileContext()
    const [loading, setLoading] = useState(true)
    const [userList, setUserList] = useState([])
    // Refs
    const content = useRef()
    const icon = useRef()

    const setIconPos = () => {
        const contentPosStyles = content.current.getBoundingClientRect()
        const iconStyles = icon.current.style
        iconStyles.top = `${contentPosStyles.top + 10}px`
        iconStyles.right = `${contentPosStyles.right - contentPosStyles.width + 10}px`
    }

    const closeModal = useCallback(() => {
        type === 'Following' ? closeFollowingModal() : closeFollowersModal()
    }, [closeFollowersModal, closeFollowingModal, type])

    useEffect(() => {
        const fetchData = async(item) => {
            try {
                const response = await fetch(`http://localhost:8000/api/CustomUserAPI/${type === 'Following' ? item.following : item.user}/`, {
                    headers: {Authorization: `Token ${token}`}
                })  
                const data = await response.json()
               setUserList(prev => [...prev, data])
            } catch (error) {
                console.log(error)
            }
        }

        setUserList([])
        setLoading(true)
        const list = type === 'Following' ? following : followers
        list.forEach(item => {
           fetchData(item) 
        })
        setLoading(false)
        setIconPos()
    }, [token, viewedId, type, followers, following])

    useEffect(() => {
        const handleClickEvent = (event) => {
            // Equal to DarkWrapper id
            if (event.target.id === 'wrapper-dark') {
                closeModal()
            }
        }

        window.addEventListener('click', handleClickEvent)
        window.addEventListener('resize', setIconPos)
        return () => {
            window.removeEventListener('click', handleClickEvent)
            window.removeEventListener('resize', setIconPos)
        }
    }, [closeModal])
    
    return (
        <DarkWrapper id='wrapper-dark'>
            <ModalContent ref={content}>
                <h3>{type}</h3>
                <IconWrapper ref={icon}>
                    <GiCancel onClick={closeModal} size={'100%'} className='cancel-icon'/>
                </IconWrapper>
                <hr/>
                {!loading 
                    ? userList.map((listUser, index) => {
                        return (
                            <UserContent key={index}>
                                <UserImage src={`http://localhost:8000${listUser.profile_picture}`} alt='ppic' />
                                <p>{listUser.username}</p>
                                {user.id !== listUser.id && 
                                    <div>
                                        <FollowButton id={listUser.id} />
                                    </div>
                                }
                            </UserContent>
                        )
                    }) 
                    : <Spinner />
                }
            </ModalContent>
        </DarkWrapper>
    )
}

export default ListModal