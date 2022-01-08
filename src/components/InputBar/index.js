import React from 'react';
import { Input, Label } from './InputBar.styles';

const InputBar= ({ placeHolder, label }) => (
    <>
    {label && <Label>{label}</Label>}
    
    <Input placeholder={placeHolder}/>
    </>
);

export default InputBar;