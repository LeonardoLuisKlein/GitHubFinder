import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: auto;
    height: 620px;
    border: 5px solid purple;
    border-radius: 10px;
    gap: 25px;
    @media (max-width: 768px) {
        gap: 40px;
    }

    #Place{
        display: flex;
        flex-direction: row;
        gap: 15px;
    }

    #Folow{
        display: flex;
        flex-direction: row;
        gap: 15px;
    }

    .card{
        width: 100px;
        height: 90px;
        background-color: #1d1e27;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
    }

`

export const Title = styled.h2`
    font-size: 2rem; 
    color: #FFFFFF;
    @media (max-width: 768px) {
    font-size: 1.5rem;
    }
`

export const Text = styled.p`
    font-size: 1.5rem; 
    margin-top: -5px;
    @media (max-width: 768px) {
    font-size: 1rem;
    }
`

export const repButton = styled.button`
    width: 70%;
    height: 50px;
    font-size: 1.5rem;
    color: white;
    background-color: purple;
    border-radius: 10px;
    border: none;
    @media (max-width: 768px) {
    font-size: 1rem;
    }
`

export const imageCard = styled.p`
    margin-top: -20px;
    width: 175px;
    height: 175px;
    border-radius: 50%;
    border: 0.7rem solid rgba(255, 255, 255, 0.1);
`

export const SubText = styled.p`
    font-size: 1.1rem;
    color: #FFFFFF ;
`