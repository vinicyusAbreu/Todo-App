import { useContext } from 'react';
import { TodoContext } from '../../contexts/todo';
import { MdDeleteOutline } from 'react-icons/md';
import {
    ContainerLista, ContainerItens, Item,
    Select, Info, Delete,
    DeleteAll, MessageNull
} from './styles';

const Itens = () => {

    const { todos, setTodos, opcao, setOpcao } = useContext(TodoContext);

    const filtrar = (id) => {
        const novoTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.done = !todo.done;
            }
            return todo
        });
        setTodos(novoTodos);

    }

    const deletar = (id) => {
        const novoTodos = todos.filter(todo => todo.id !== id);
        setTodos(novoTodos);
    }
    const deletarTodos = () => {

        const novoTodos = todos.filter(todo => todo.done === false);
        setTodos(novoTodos);

    }

    switch (opcao) {
        case 'All':
            return (
                <ContainerLista>
                    {todos.length > 0 && (
                        <ContainerItens>
                            {todos.map(todo => (
                                <Item key={todo.id}>
                                    <Select type="checkbox"
                                        defaultChecked={todo.done}
                                        onClick={() => filtrar(todo.id)}

                                    />
                                    <Info>{todo.text}</Info>
                                </Item>
                            ))}
                        </ ContainerItens>
                    )}

                </ContainerLista>
            )
        case 'Active':
            return (
                <ContainerLista>
                    {todos.length > 0 && (
                        <ContainerItens>
                            {todos.map(todo => (
                                !todo.done && (
                                    <Item key={todo.id}>
                                        <Select type="checkbox"
                                            defaultChecked={todo.done}
                                            onClick={() => filtrar(todo.id)} />
                                        <Info>{todo.text}</Info>
                                    </Item>
                                )
                            ))}
                        </ ContainerItens>
                    )}

                </ContainerLista>
            )
        case 'Completed':
            return (
                <ContainerLista>
                    {todos.length > 0 ? (
                        <ContainerItens>
                            {todos.map(todo => (
                                todo.done && (
                                    <Item key={todo.id}>
                                        <Select type="checkbox"
                                            defaultChecked={todo.done}
                                            onClick={() => filtrar(todo.id)}
                                        />
                                        <Info>{todo.text}</Info>
                                        <Delete onClick={() => deletar(todo.id)}>
                                            <MdDeleteOutline />
                                        </Delete>

                                    </Item>
                                )
                            ))}
                        </ ContainerItens>
                    ) : (
                        <MessageNull>
                            No Task
                        </MessageNull>
                    )
                    }
                    <DeleteAll onClick={deletarTodos}>
                        <MdDeleteOutline />
                        <span>Delete All</span>
                    </DeleteAll>
                </ContainerLista >
            )
    }
}

export default Itens