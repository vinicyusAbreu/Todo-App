import { TodoContext } from '../../contexts/todo';
import { useState, useContext } from 'react';
import { Form, Input, Submit } from './styles'
import { v4 as uuidv4 } from 'uuid';


const Formulario = () => {

    const { todos, setTodos } = useContext(TodoContext);
    const [todo, setTodo] = useState('');

    const cadastrar = (e) => {

        e.preventDefault();

        if (todo.trim().length > 0) {
            setTodos([...todos, { id: uuidv4(), text: todo, done: false }]);
            setTodo('');
        }

    }

    return (
        <Form
            onSubmit={cadastrar}
        >
            <Input type="text" placeholder="add details"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <Submit type="submit">Add</Submit>
        </Form>
    )
}
export default Formulario;