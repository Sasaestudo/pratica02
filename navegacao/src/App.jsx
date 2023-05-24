import { useContext} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Erro404 from './pages/Erro404'
import Home from './pages/Home'
import Login from './pages/Login'
import Perfil from './pages/Perfil'
import UserContext from './contexts/UserContext'

export default function App() {
  const {logado} = useContext(UserContext)
  

  return (
    <BrowserRouter>
      <Routes>
        {/*estiver logado roda essas rotas*/}
        
        {logado ?
          <>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home  />} />
              <Route path="perfil/:id" element={<Perfil />} />            
            </Route>
          </>
         
          /* não logado roda essa rota */
          :
          <Route path="/login" element={<Login/>} />
        }
        
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  )
}
