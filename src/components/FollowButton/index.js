import React, { useState, useEffect } from 'react';
import { useProfileContext } from '../../context';
import { ThinButton } from '../../GlobalStyle';


const FollowButton = ({ id }) => {
    const { userFollowing, handleUnfollow, handleFollow } = useProfileContext()
    const [followStatus, setFollowStatus] = useState('Follow');

    const follow = () => {
        handleFollow(id)
        setFollowStatus('Following')
    }

    const unfollow = () => {
        handleUnfollow(id)
        setFollowStatus('Follow')
    }
    
    useEffect(() => {
        setFollowStatus(userFollowing.filter(item => item.following === id).length > 0 ? 'Following' : 'Follow')
    }, [id, userFollowing])

    return (
        <ThinButton width='90%' onClick={followStatus === 'Following' ? unfollow : follow}>{followStatus}</ThinButton>
    )
}

export default FollowButton