import styled, { keyframes } from "styled-components";

export const Main = styled.div`
    padding: 10px;
    width: 100%;
    background-color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;

`

const moveInRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 42px;
  gap: 10px;
  padding: 10px 15px 10px 20px;
  cursor: pointer;
  border: 1px solid #006A05;
  border-radius: 4px;
  background-color: transparent;
  color: #006A05;
  transition: background-color 0.3s ease, color 0.3s ease;
  
  animation: ${moveInRight} 300ms ease-out;

  &:hover {
    background-color: #006A05;
    color: white;
  }
`;