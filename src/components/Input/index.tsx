import React, { InputHTMLAttributes } from 'react';

import {Container} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
    
}


const Input:React.FC<InputProps> = ({title, onChange, value }) => (
    <Container>
        <label htmlFor="title">{title}</label>
        <input value={value} onChange={onChange} type="text"/>
    </Container>
)

export default Input;