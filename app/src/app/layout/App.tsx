import { Container } from 'semantic-ui-react'
import { Outlet } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';

function App() {
  return (
    <>
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <Container style={{ marginTop: '7em' }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  )
}

export default App
