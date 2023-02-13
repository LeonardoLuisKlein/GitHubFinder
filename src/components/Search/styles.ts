import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: auto;
    height: 300px;
    border: 5px solid purple;
    border-radius: 10px;
`

export const Title = styled.h2`
    font-size: 2rem; 
    color: #FFFFFF;
`

export const Subtitle = styled.p`
    font-size: 1.5rem; 
`

export const SearchBar = styled.input`
        flex: 1;
        border: 0px;
        background: #1d1e27;
        outline: 0;
        color: #FFF;
        font-size: 18px;
        height: 50px;
        width: 500px;
        border-radius: 10px;

`

export const SearchButton = styled.button`
    background-color: purple;
    height: 50px;
    width: 50px;
    border-radius: 10px;
`

export const SearchArea = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`