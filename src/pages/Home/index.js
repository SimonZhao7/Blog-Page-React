import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
// Styles
import { useAppContext } from '../../context';
import { PostContentWrapper } from './Home.styles';
// Components
import Post from '../../components/Post';
import Spinner from '../../components/Spinner';

const Home = () => {
    const { user, token } = useAppContext()
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            fetch(`http://localhost:8000/api/PostAPI/`, {
                headers: {Authorization: `Token ${token}`}
            })
                .then(response => response.json())
                .then(data => setPosts(data))
        }
        fetchPosts()
        setLoading(false)
    }, [token])

    if (loading) {
        return <Spinner />
    }

    return (
        <PostContentWrapper>
            {!user && <Navigate to='/login' />}
            {posts.map((post, index) => (
                <Post key={index} {...post} />
            ))}
        </PostContentWrapper>
    );
};

export default Home;