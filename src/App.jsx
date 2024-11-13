import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import CrearBlog from './pages/blogs/crearBlog/CrearBlog'
import ModificarBlog from './pages/blogs/modificarBlog/ModificarBlog'
import VerBlog from './pages/blogs/verBlog/VerBlog'
import Login from './pages/login/login'
import Register from './pages/register/Register'
import MyBlogs from './pages/myBlogs/MyBlogs'

function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/crear-blog' element={<CrearBlog />}/> /* crear un blog */
        <Route path='/modificar-blog/:idblog' element={<ModificarBlog />} />/* modificar un blog traer datos con un form*/
        <Route path='mis-blogs/:iduser' element={<VerBlog />} />/* ver blog de x usuario y eliminar hacer un boton dentro */
        <Route path='login/' element={<Login />} />
        <Route path='register/' element={<Register />} />
        <Route path='/blogs/:idblog' element={<VerBlog />} />
        <Route path='/perfil' element={<MyBlogs />} /> /*path con comentarios observaciones  */
         
      </Routes>

    </BrowserRouter>
  
  )
}

export default App
