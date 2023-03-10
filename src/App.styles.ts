import styled from "styled-components";

export const Container = styled.div`
    background-color: #17181F;
    color: #797a81;
    min-height: 100vh;
`

export const Area = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 980px;
    padding: 10px;
    gap: 50px;
    @media (max-width: 768px) {
    gap: 30px;
    }
`

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: #FFFFFF;
    text-align: center;
`