import styled from "styled-components";


const mundaPosition = position => {
    switch (position) {
        case "All":
            return "left:0px;";
        case "Active":
            return "left:41%;";
        case "Completed":
            return "left:78%;";
    }
}


const ContainerOpcao = styled.nav `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #BDBDBD;
`;

const ListaOpcao = styled.ul `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    margin-top:30px;

    width: 100%;
`;

const ItemOpcao = styled.li `
    cursor: pointer;
    color:#333333;
    font-size:14px;
    padding:10px;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #2F80ED;
    }

`;
const ItemOpcaoMargin = styled(ItemOpcao)
`
    margin-left:50px;
`;

const ContainerAction = styled.div `

    width: 89%;
    height: 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    position: relative;
    transition: all 0.3s ease-in-out;
   

`;

const Action = styled.span `
    background: #2F80ED;
    width: 89px;
    height: 4px;
    display: block;
    border-radius: 4px 4px 0px 0px;
    transition: all 0.3s ease-in-out;
    position:absolute;
    ${({ position }) => mundaPosition(position)}
    @media (max-width: 420px) {
        width: 48px;
    }
    `;

export {
    ContainerOpcao,
    ListaOpcao,
    ItemOpcao,
    ItemOpcaoMargin,
    ContainerAction,
    Action
}