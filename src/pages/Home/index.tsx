import React, { useState, FormEvent, useEffect } from 'react';

import { Container } from './styles';

import api from '../../services/api';



import Input from '../../components/Input';


const Home:React.FC = () => {

    const [results, setResults] = useState([]);
    

    const [titleValue, setTitleValue] = useState('');
    const [maxResultsValue, setMaxResultsValue] = useState<number>();

    async function handleSearchInYoutube(e: FormEvent) {

        e.preventDefault();

        const response = await api.get('', {
            params: {
                q: titleValue,
                maxResults: maxResultsValue,
                type: 'video'
            }
        });         

        console.log(response.data);
    }


    return (
        <>
        <Container>
            <form onSubmit={handleSearchInYoutube}>
                
                <Input 
                      
                    value={titleValue}                 
                    title='Título'
                    onChange={(e) => {
                        setTitleValue(e.target.value)
                        
                    }}                   
                />
                
                <Input 
                    
                    value={maxResultsValue}
                    title='Máximo de resultados'
                    onChange={(e) => { 
                        setMaxResultsValue(Number(e.target.value));
                        
                    }}  
                        
                    
                />

                <button type='submit'>
                    Pesquisar
                </button>
            </form>
        </Container>
        </>
    )
}

export default Home;