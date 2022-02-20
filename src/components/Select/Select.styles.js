import styled from 'styled-components';


export const HiddenInput = styled.input`
    &&& {
        opacity: 0;
        margin: 0;
        border: 0;
        height: 0;
    }
`

export const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'var(--lightBlueHover)' : 'var(--lightBlue)',
      transition: 'background-color 0.1s ease-in',
      '&:hover, &:focus': {
        background: 'var(--lightBlueHover)'
      }
    }),
    control: (provided) => ({
        ...provided,
        height: '40px',
        border: '2px solid var(--lightGray)',
        boxShadow: 'none',
        transition: 'border-color 0.3s ease',
        '&:hover': {
          borderColor: 'var(--darkGray)'
        },
    }),
    menu: (provided) => ({
        ...provided,
        background: 'var(--lightBlue)',
        color: 'white'
    }),
}