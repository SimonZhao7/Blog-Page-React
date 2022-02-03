import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../../context';
import { Image } from '../Navbar/Navbar.styles';
import { SearchInput, ResultWrapper, ResultContent, ResultMessage } from './SearchBar.styles';
import { AiOutlineSearch } from 'react-icons/ai';


const SearchBar = () => {
    const { token } = useAppContext()
    const [value, setValue] = useState('')
    const [showResults, setShowResults] = useState(false)
    const [results, setResults] = useState([])
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    // Refs
    const input = useRef()
    const resultWrapper = useRef()

    const handleClick = (event) => {
        if (event.target !== input.current) {
            setShowResults(false)
        } else {
            setShowResults(true)
        }
    }

    useEffect(() => {
        const fetchResults = async () => {
            if (value !== '') {
                const response = await fetch(`http://localhost:8000/api/CustomUserAPI/search=${value}/`, {
                    headers: {Authorization: `Token ${token}`}
                })
                const data = await response.json()
                setResults(data)
            } else {
                setResults([])
            }
        }
        fetchResults()
        const styles = input.current.getBoundingClientRect()
        if (showResults) {
            resultWrapper.current.style.left = `${styles.left}px`
            resultWrapper.current.style.top = `${styles.top + 40}px`
            resultWrapper.current.style.opacity = 1;
        }
    }, [token, value, screenWidth, showResults])

    useEffect(() => {
        window.addEventListener("resize", () => setScreenWidth(window.innerWidth))
        window.addEventListener("click", handleClick)
        return () => { 
            window.removeEventListener("resize", () => setScreenWidth(window.innerWidth))
            window.removeEventListener("click", handleClick)
        }
    }, []);

    return (
        <>
        <SearchInput type='text' onChange={(e) => setValue(e.target.value)} ref={input} />
        {showResults && 
            <ResultWrapper ref={resultWrapper}>
                {results.length > 0
                    ? results.map((result, index) => (
                        <a className='result-link' key={index} href={`/${result.username}`}>
                            <ResultContent>
                                <Image src={`http://localhost:8000${result.profile_picture}`} alt='ppic' />
                                {result.username}
                            </ResultContent>
                        </a>
                    ))
                    : (<ResultMessage><AiOutlineSearch />No Results</ResultMessage>)
                }
            </ResultWrapper>
        }
        </>
    )
}

export default SearchBar