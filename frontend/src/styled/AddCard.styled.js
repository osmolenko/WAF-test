import styled from "styled-components";

export const AddCardBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`

export const AddCardDiv = styled.div`
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    max-width: 25rem;
`

export const AddCardClose = styled.button`
    float: right;
    background-color: #fff;
    border: none;
    text-decoration: none;
    font-size: 1rem;
`

export const AddCardH1 = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    padding-bottom: 0.75rem;
`

export const AddCardInput = styled.input`
    width: 20rem;
    font-size: 1rem;
    padding: 0.5rem;
    margin: 0.25rem 0 0.25rem 0;
    border: 0.5px solid black
    border-radius: 8px;
`

export const AddCardButton = styled.button`
    width: 20rem;
    margin-top: 0.5rem;
    padding: 0.5rem;
    border:none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    color:white;
    background-color: #5F46DC;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #3E24BF;
    }
`
