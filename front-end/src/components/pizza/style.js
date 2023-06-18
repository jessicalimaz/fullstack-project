import styled from 'styled-components'

export const Card = styled.div`
    font-family: 'Inter';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    width: 200px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    margin: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    background-color: #fff;

    img {
        width: 140px;
        height: 140px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    div {
        text-align: center;
    }

    h2 {
        font-size: 18px;
        opacity: 70%;
        font-weight: bold;
        font-weight: bold;
        margin: 0 auto; 
    }

    p {
        color: #4caf50;
        margin: 0 auto;
    }

    .price{
        margin-top: 10px;
        font-size: 16px;
        font-weight: bold;
    }

    .ingredients {
        font-size: 13px;
        color: #333;
        opacity: 60%;
        margin: 10px 0;
        text-align: center;
    }

    button {
        font-size: 16px;
        padding: 10px 20px;
        background-color: #4caf50;
        color: #fff;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        margin: 10px 0;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #3e8e41;
    }
`