import styled from 'styled-components';

export const HomeContainer = styled.section`
    display:flex;
    flex-direction:column;
    align-items:flex-start;

    @media(max-width:780px){
        align-items:center;
    }
`;