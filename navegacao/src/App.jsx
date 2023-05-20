import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Erro404 from './pages/Erro404'
import Home from './pages/Home'
import Login from './pages/Login'
import Perfil from './pages/Perfil'

export default function App() {
  const [logado, setLogado] = useState(false);
  const [userID, setUserID] = useState();

  function handleLogin(event) {
    setLogado(true);
    setUserID(100);
  }

  function handleLogout(event) {
    setLogado(false);
    setUserID(null);
  }

  return (
    <BrowserRouter>
      <Routes>
        {/*estiver logado roda essas rotas*/}
        
        {logado ?
          <>
            <Route path="/" element={<Layout id={userID} onLogout={handleLogout} />} >
              <Route index element={<Home  />} />
              <Route path="perfil/:id" element={<Perfil />} />            
            </Route>
          </>
         
          /* não logado roda essa rota */
          :
          <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        }
        
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  )
}
