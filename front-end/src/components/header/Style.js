import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  background-color: #c50705;
  align-items: center;
  justify-content: center;
  z-index: 9999; 

  h1 {
    color: #f6a002;
    font-family: "Rowdies";
  }

  #delivery {
    color: transparent;
    -webkit-text-stroke: 1px #f6a002;
  }
`;