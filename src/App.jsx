import { useState } from 'react'
import Container from './components/Container'
import Opcao from './components/Opcao'
import Formulario from './components/Form'
import Itens from './components/Lista'
import TodoProvider from './contexts/todo'

function App() {


  return (
    <TodoProvider>
      <Container>
        <h1>#todo</h1>
        <Opcao />
        <Formulario />
        <Itens />
      </Container>
    </TodoProvider>
  )
}

export default App
