import Hero from '../components/inicio/heroe'
import ProductosRecientes from '../components/inicio/productosRecientes'
import Informacion from '../components/inicio/informacion'
import CategoriasProductos from '../components/inicio/categoriasProductos'
import ProductosOferta from '../components/inicio/productosOferta'
import ProductosMarca from '../components/inicio/productosMarca'

function Inicio(){
    return(
    <div className="container">
        <Hero/>
        <ProductosRecientes/>
        <Informacion/>
        <CategoriasProductos/>
        <ProductosOferta/>
        <ProductosMarca/>
        {/*<ProductosRecientes/>
        <Informacion/>
        <CategoriasProductos/>
        <ProductosOferta/>
<ProductosMarca/>*/}
    </div>
    )

}


export default Inicio
