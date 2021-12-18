import styled from 'styled-components';


export const NoticeContainer = styled.div`
    padding:20px;
    display:flex;
    width:700px;

    .text-container{
        flex-direction:column;
        margin:0px 20px;
    }

    @media(max-width:780px){
       flex-direction:column;
       align-items:center;
       text-align:center;
       width:auto;
    }
`;
export const NoticeImg = styled.img`
    width:250px;
    height:250px;
    border-radius:5px;
`;
export const NoticeTitle = styled.h1`
    color:red;
    cursor:pointer;
`;
export const NoticeDescription = styled.p`
    color:red;
    font-weight:bold;
`;