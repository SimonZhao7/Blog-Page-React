import React from 'react';
import Select from 'react-select';
import { customStyles, HiddenInput } from './Select.styles';


const RequiredSelect = ({ options, onChange, value }) => {
    return (
        <>
        <Select options={options} onChange={onChange} name='aspect_ratio' styles={customStyles}></Select>
        <HiddenInput value={value ? value : ''} required onChange={() => {}}/>
        </>
    )
}

export default RequiredSelect;