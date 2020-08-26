import styled from 'styled-components';

export const Container = styled.div`

    label {
        font-size: 24px;
        font-weight: bold;
        
    }

    input {
        width: 450px;
        height: 87px;
        border: 0;
        border-radius: 20px;
        margin-top: 9px;

        font-size: 24px;
        font-weight: 500;
        padding-left: 16px;
        

    }

    & + div {
        margin-top: 31px;
    }


`;