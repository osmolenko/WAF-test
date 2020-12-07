import styled from 'styled-components';

export const CardDiv = styled.div`
    background-color: white;
    width: 18rem;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 1rem;
`

export const CardInfoDiv = styled.div`
    padding: 2%;
`

export const CardImg = styled.img`
    width: 100%;
    max-width: 18rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
`

export const CardH1 = styled.h1`
    font-size: 1.75rem;
`

export const CardPrice = styled.h3`
    padding: 0.5vw 0;
    font-size: 1rem;
    color: grey;
`

export const CardInfo = styled.p`
    font-size: 0.90rem;
    color: black;
`

export const CardButton = styled.button`
    width: 100%;
    height: 2rem;
    border:none;
    border-radius: 8px;
    background-color: white;
    font-weight: bold;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #3E24BF;
        color: white;
    }
`

export const EditCardInput = styled.input`
  width: 17rem;
  font-size: 1rem;
  padding: 0.1rem;
  margin: 0.25rem 0 0.25rem 0;
  border: 0.5px solid black
  border-radius: 8px;
`


