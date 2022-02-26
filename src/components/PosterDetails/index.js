import React from 'react';
import { Content } from './PosterDetails.styles';
import { VscEllipsis } from 'react-icons/vsc';


const PosterDetails = ({ postUser }) => (
    <Content>
        <div>
            <a href={`/${postUser.username}`}><img src={`http://localhost:8000${postUser.profile_picture}`} alt='poster profile pic'/></a>
            <a href={`/${postUser.username}`}><h4>{postUser.username}</h4></a>
        </div>
        <VscEllipsis size='1.15rem' color='black' />
    </Content>
)

export default PosterDetails