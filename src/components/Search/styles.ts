import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: auto;
    height: 300px;
    border: 5px solid purple;
    border-radius: 10px;
    @media (max-width: 768px) {
    gap: 30px;
    }

    input{
        flex: 1;
        border: 0px;
        background: #1d1e27;
        outline: 0;
        color: #FFF;
        font-size: 18px;
        height: 50px;
        width: 30vw;
        border-radius: 10px;
        @media (max-width: 768px) {
        margin-left: 15px;
        width: 70%;
    }
    }

    button{
    background-color: purple;
    height: 50px;
    width: 50px;
    border-radius: 10px;
    border: none;
    @media (max-width: 768px) {
        margin-right: 15px;
        height: 50px;
        width: 50px;
    }
    }
`

export const Title = styled.h2`
    font-size: 2rem; 
    color: #FFFFFF;
    text-align: center;
    margin-top: -5px;
    @media (max-width: 768px) {
    font-size: 1.5rem;
    }
`

export const Subtitle = styled.p`
    font-size: 1.5rem; 
    text-align: center;
    @media (max-width: 768px) {
    font-size: 1rem;
    }
`

export const SearchBar = styled.input`


`

export const SearchButton = styled.button`

`

export const SearchArea = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`