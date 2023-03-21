import {Col, Row} from 'antd';
const categorias = [

    {
        key:'1',
        image:'https://laroussecocina.mx/wp-content/uploads/2019/05/cerveza-helada.jpg.webp',
        title:'Bebidas'
    },
    {
        key:'2',
        image:'https://laroussecocina.mx/wp-content/uploads/2019/05/cerveza-helada.jpg.webp',
        title:'Bebidas'
    },  {
        key:'3',
        image:'https://laroussecocina.mx/wp-content/uploads/2019/05/cerveza-helada.jpg.webp',
        title:'Bebidas'
    },
    {
        key:'4',
        image:'https://laroussecocina.mx/wp-content/uploads/2019/05/cerveza-helada.jpg.webp',
        title:'Bebidas'
    },
    {
        key:'5',
        image:'https://laroussecocina.mx/wp-content/uploads/2019/05/cerveza-helada.jpg.webp',
        title:'Bebidas'
    },
    {
        key:'6',
        image:'https://laroussecocina.mx/wp-content/uploads/2019/05/cerveza-helada.jpg.webp',
        title:'Bebidas'
    },
    {
        key:'7',
        image:'https://laroussecocina.mx/wp-content/uploads/2019/05/cerveza-helada.jpg.webp',
        title:'Bebidas'
    },
    {
        key:'8',
        image:'https://laroussecocina.mx/wp-content/uploads/2019/05/cerveza-helada.jpg.webp',
        title:'Bebidas'
    },
    {
        key:'9',
        image:'https://laroussecocina.mx/wp-content/uploads/2019/05/cerveza-helada.jpg.webp',
        title:'Bebidas'
    },
    {
        key:'10',
        image:'https://laroussecocina.mx/wp-content/uploads/2019/05/cerveza-helada.jpg.webp',
        title:'Bebidas'
    },
    {
        key:'11',
        image:'https://laroussecocina.mx/wp-content/uploads/2019/05/cerveza-helada.jpg.webp',
        title:'Bebidas'
    },
    {
        key:'12',
        image:'https://laroussecocina.mx/wp-content/uploads/2019/05/cerveza-helada.jpg.webp',
        title:'Bebidas'
    }
]

function CategoriasProductos(){
    return(
        <div className='block productCategories'>
            <h2>Categorias de los productos  </h2>
            <Row gutter={[24,24]}>
                {categorias.map(categoria=>{

                    return(
                        <Col xs={{span:12}} sm={{span:6}} lg={{span:4}} key={categoria.key}>
                        <div className='content'>
                            <div className='image'>
                                <img src={categoria.image} alt="producto"/>
                            </div>
                            <h3>{categoria.title}</h3>
                           

                        </div>
                    
                    
                    </Col>
                    )
                })}

            </Row>

        </div>

    )



}


export default CategoriasProductos