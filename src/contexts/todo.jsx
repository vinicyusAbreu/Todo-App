import { useState, createContext, useEffect } from "react";

export const TodoContext = createContext({});

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([])
    const [opcao, setOpcao] = useState('All')

    useEffect(() => {
        let timer = setTimeout(() => {
            const localStorageTodos = localStorage.getItem('todos')
            if (localStorageTodos) {
                setTodos(JSON.parse(localStorageTodos))
            }
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            localStorage.setItem('todos', JSON.stringify(todos))
        }, 0);
        return () => clearTimeout(timer);
    }, [todos]);

    return (
        <TodoContext.Provider value={{ todos, setTodos, opcao, setOpcao }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;