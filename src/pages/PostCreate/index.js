import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context';
import { ContentWrapper, Form, FormInput, Button } from '../../GlobalStyle';
import RequiredSelect from '../../components/Select';
import Message from '../../components/Message';


const choices = [
    { value: 'one-one', label: '1 : 1' },
    { value: 'four-three', label: '4 : 3' },
    { value: 'sixteen-nine', label: '16 : 9' },
    { value: 'nine-sixteen', label: '9 : 16' },
]

const PostCreate = () => {
    const { user, token } = useAppContext()
    const [formState, setFormState] = useState()
    const [errors, setErrors] = useState()
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const body = new FormData()
        body.append('user', user.id)
        Object.keys(formState).forEach(key => {body.append(key, formState[key])})

        try {
            const response = await fetch(`http://localhost:8000/api/PostAPI/`, {
                headers: {
                    Authorization: `Token ${token}`,
                },
                method: 'POST',
                body: body
            })
            const data = await response.json()
            if (response.status >= 200 && response.status <= 299) {
                navigate('/')
            } else {
                // The only possible error would be the image field
                setErrors(data.image)
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value
        })
    }

    const handleSelectChange = (e) => {
        setFormState({
            ...formState,
            'aspect_ratio': e.value
        })
    }

    return (
        <ContentWrapper>
            <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                <legend>Create Post</legend>
                <Message errors={errors} nonField/>
                <label>Image</label>
                <FormInput type="file" name='image' onChange={handleChange} required/>
                <label>Aspect Ratio</label>
                <RequiredSelect options={choices} name='aspect_ratio' onChange={handleSelectChange} value={formState && formState.aspect_ratio}></RequiredSelect>
                <label>Caption</label>
                <textarea rows={20} name='caption' onChange={handleChange}></textarea>
                <Button type='submit'>Post</Button>
            </Form>
        </ContentWrapper>
    )
}

export default PostCreate;