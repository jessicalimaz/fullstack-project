import styled from 'styled-components'

export const divButton = styled.div`
    width: 100%;
    text-align: center;
`
export const Button = styled.button`
    font-weight: bold;
    position: fixed;
    bottom: 0;
    margin-bottom: 15px;
    left: 50%;
    transform: translateX(-50%);

    background-color: #4CAF50;
    color: white;
    padding: 15px 30px; 
    border: none;
    border-radius: 4px;
    cursor: pointer;

    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2); 

    &:hover {
        background-color: #3e8e41;
    }

    &:active {
        background-color: #2e6227;
    }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const DivCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 100px; 
`;