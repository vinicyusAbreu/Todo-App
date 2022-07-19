import styled from "styled-components";

const ContainerLista = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 18px;
    position: relative;
`;

const ContainerItens = styled.ul `
    list-style: none;
`;

const Item = styled.li `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 27px;
    
`;


const Info = styled.label `
    font-weight: 500;
    font-size: 18px;
    color: #000;
    flex-grow: 1;
    margin-left: 7px;
`;

const Select = styled.input.attrs({
    type: 'checkbox'
})
`
    cursor: pointer;
    width: 24px;
    height: 24px;
    -webkit-appearance: none;
    background: none;
    border-radius: 4px;
    background-color: none;
    border: 1px solid #828282;
    transition: background 300ms;
    cursor: pointer;

    &:checked {
        background-color: #2F80ED;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &:checked:before {  
        content: "";
        position: absolute;
        display: none;
    }

    &:checked:after { 
        content: "✔";
        display: block;
        color: #FFF;
        font-size: 16px;
        font-weight: bold;

    }
    &:checked + ${Info} {
        text-decoration: line-through;
        color: #333;
    }

`;

const Delete = styled.button `
    background: none;
    border: none;
    cursor: pointer;
    svg{
        color: #BDBDBD;
        font-size: 24px;
        transition: all .3s ease-in-out;        

    }
    &:hover{
        svg{
            color: #EB5757;
        }
    }
    `;

const DeleteAll = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #FFF;
    font-weight: 600;
    width: 124px;
    height: 40px;
    cursor: pointer;
    background: #EB5757;
    border-radius: 4px;
    border: none;

    position: absolute;
    right: 0;
    bottom: -50px;
    svg{
        font-size: 16px;
    }
`;


const MessageNull = styled.div `
    padding-top: 19px;
    padding-bottom: 19px;
    text-align: center;
    font-size: 20px;
    background: #eee;
    border-radius: 12px;
`;

export {
    ContainerLista,
    ContainerItens,
    Item,
    Select,
    Info,
    Delete,
    DeleteAll,
    MessageNull
};