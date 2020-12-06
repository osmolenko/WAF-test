import styled from 'styled-components';

export const MainDiv = styled.div`
  padding: 2rem;
`

export const FloatButton = styled.button`
  position: fixed;
  width: 3rem;
  height: 3rem;
  bottom: 2rem;
  right: 2rem;
  border: none;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: #fff;
  background-color: #3E24BF;
  font-size: 2rem;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
      border: 1px solid #fff;
      background-color:#2425BF ;
      box-shadow: rgba(0, 0, 0, 0.55) 5px 10px 25px;
  }
`

export const CardsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`
