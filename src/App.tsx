import { Container } from 'react-bootstrap'
import './App.css'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home/>}
      </Routes>
    </Container>
  )
}

export default App
