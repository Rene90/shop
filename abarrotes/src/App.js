
import './App.css';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Inicio from './paginas/inicio'
import Acerca from './paginas/acerca'
import Productos from './paginas/tienda'
import Preguntas from './paginas/preguntas'
import Contacto from './paginas/contacto'
//import 'antd/dist/antd.min.css'
//import 'antd/dist/antd.css'
import 'antd/dist/reset.css';//Esto es porque creamos el proyecto con npx y por la version de antd

import Encabezado from './components/plant/header'
import FooterW from './components/plant/footerw'
import FooterCopyright from './components/plant/footercopyright.js'
import {Layout} from 'antd';
const {Header, Content, Footer}= Layout;
function App() {
  return (
    <Layout className="layout">
      <Router>
        <Header>
          <Encabezado/>
        </Header>
        <Content>
          <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/tienda/react/antd/tiendita/' element={<Inicio/>} />
          <Route path='/tienda/react/antd/tiendita/acerca' element={<Acerca/>} />
          <Route path='/tienda/react/antd/tiendita/productos' element={<Productos/>}/>
          <Route path='/tienda/react/antd/tiendita/preguntas' element={<Preguntas/>}/>
          <Route path='/tienda/react/antd/tiendita/contacto' element={<Contacto/>}/>
          </Routes>
        </Content>
      </Router>
     <Footer>
      <FooterW/>
      <FooterCopyright/>
     </Footer>
    </Layout>
    
  );
}

export default App;

/*<Routes pat='/tienda/react/antd/tiendita/acerca' element={<Acerca/>} />
          <Routes pat='/tienda/react/antd/tiendita/productos' element={<Productos/>} />
          <Routes pat='/tienda/react/antd/tiendita/preguntas' element={<Preguntas/>} />
          <Routes pat='/tienda/react/antd/tiendita/contacto' element={<Contacto/>} />*/