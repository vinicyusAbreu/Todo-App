import { useContext } from 'react'
import { TodoContext } from '../../contexts/todo'
import {
    ContainerOpcao,
    ListaOpcao,
    ItemOpcao,
    ItemOpcaoMargin,
    ContainerAction,
    Action
} from './styles'

const Opcao = () => {

    const { opcao, setOpcao } = useContext(TodoContext)

    const mudarOpcao = (opcao) => {
        setOpcao(opcao)
    }


    return (
        <ContainerOpcao>
            <ListaOpcao>

                <ItemOpcao
                    onClick={() => mudarOpcao('All')}
                >
                    All
                </ItemOpcao>

                <ItemOpcaoMargin
                    onClick={() => mudarOpcao('Active')}
                >
                    Active
                </ItemOpcaoMargin>

                <ItemOpcao
                    onClick={() => mudarOpcao('Completed')}
                >
                    Completed
                </ItemOpcao>

            </ListaOpcao>

            <ContainerAction>
                <Action position={opcao} />
            </ContainerAction>
        </ContainerOpcao>
    )
}

export default Opcao;