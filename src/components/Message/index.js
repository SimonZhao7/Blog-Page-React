import React from 'react';
import { Alert, Wrapper } from './Message.styles';


const Message = ({ type, errors, message, nonField }) => (
    <>
    {errors && 
        errors.map((error, index) => {
            if (nonField) {
                return <Alert key={index} type='error'>{error}</Alert>
            } else {
                return <Wrapper key={index}>* {error}</Wrapper>
            }
        }
    )}
    {message && 
        <Alert type={type}>{message}</Alert>
    }
    </>
)

export default Message