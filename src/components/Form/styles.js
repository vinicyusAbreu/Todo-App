import styled
from "styled-components";

const Form = styled.form `
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 18px;
    @media screen and (max-width: 420px) {
        flex-direction: column;
    }
`;

const Input = styled.input `
    width: 476px;
    height: 56px;
    margin-right:25px;
    padding-left:14px;
    font-weight:400;
    font-size:14px;
    color: #828282;
    border: 1px solid #BDBDBD;
    border-radius: 12px;
    outline: none;
    @media screen and (max-width: 420px) {
        margin: 0;
        width: 100%;
        margin-bottom: 10px;
    }
`;

const Submit = styled.button `
    height: 56px;
    width: 109px;
    background: #2F80ED;
    box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
    border-radius: 12px;
    cursor: pointer;
    color: #FFFFFF;
    border: none;
    font-weight: 600;
    font-size: 14px;
    transition:all 0.3s ease-in-out;
    &:hover{
        background: #1c3cc9;
        }
        @media screen and (max-width: 420px) {
        
        width: 100%;
        
    }
`;

export {
    Form,
    Input,
    Submit
};