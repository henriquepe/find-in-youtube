import styled from 'styled-components';

import { shade } from 'polished';

import youtubeBackground from '../../assets/youtube-background.png';

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    


    form {
        width: 450px;
        height: 430px;
        position: relative;
        left: 26%;


        display: flex;
        flex-direction: column;
        justify-content: center;

        

        button {
            margin-top: 48px;
            width: 450px;
            height: 87px;
            background: #FD130A;
            border:0;
            border-radius: 20px;
            font-family: 'Poppins' sans-serif;
            font-size: 22px;
            font-weight: 500;
            transition: background-color 0.2s;

            &:hover {
                background: ${shade(0.2, '#FD130A')};

            }
            

        }
    }

    width: 100%;
    height: 100vh;
    background: url(${youtubeBackground}) no-repeat center;
    background-size: cover;

`;