import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  background: var(--background-light);
  width: 550px;
  border-radius: 8px;
  padding: 20px;
  margin-top: 15px;
  margin-bottom: 40px;
  box-shadow: 0 2px 7px rgba(0,0,0,0.30);
  h2 {
    font-size: 22px;
    color: var(--text);
    margin-bottom: 10px;
  }
`

export const Templates = styled.div`
  width: 100%;
  height: 90px;
  background: var(--background);
  border-radius: 8px;
  overflow-y: auto;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 20px;
  button {
    border: 0;
    background: transparent;
    margin-right: 10px;
    border: 2px solid transparent;
    &.selected {
      border-color: #4395D8;
    }
    img {
      width: 53px;
      height: 53px;
    }
  }
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #8E37D7;
  }
`

export const Form = styled.form`
  input {
    height: 40px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #dbdbdb;
    padding: 0 15px;
    font-size: 14px;
    margin-bottom: 10px;
  }
`

export const Button = styled.button`
  width: 100%;
  font-size: 16px;
  padding: 12px 20px;
  font-weight: 600;
  color: #fff;
  margin-top: 20px;
  text-align:center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  transition: all .4s ease-in-out;
  background-image: linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7);
  &:hover{
    background-position: 100% 0;
  }
`