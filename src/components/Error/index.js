import React from 'react';
import { Alert, Wrapper } from './Error.styles';


const Error = ({ errors, nonField }) => (
    <>
    {errors && 
        errors.map((error, index) => {
            if (nonField) {
                return <Alert key={index}>{error}</Alert>
            } else {
                return <Wrapper key={index}>* {error}</Wrapper>
            }
        }
    )}
    </>
)

export default Error