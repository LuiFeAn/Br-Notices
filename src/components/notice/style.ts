import styled from 'styled-components';

export const NoticeContainer = styled.div`
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
`;
export const NoticeTitle = styled.h1`
    color:red;
    font-size:40px;
    inline-size:750px;
    @media(max-width:780px){
        font-size:35px;
        inline-size:auto;
    }
`;
export const NoticeImg = styled.img`
    width:700px;
    height:400px;
    border-radius:5px;

    @media(max-width:780px){
        width:380px;
        height:250px;
    }
`;
export const NoticeContent = styled.p`
    inline-size:750px;

    @media(max-width:780px){
        inline-size:auto;
    }
`;