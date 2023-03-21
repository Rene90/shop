import {Col, Row, Button} from 'antd'

const productos = [
    {
        key:'1',
        image:'https://cdn1.matadornetwork.com/blogs/2/2018/10/conchas-mexicanas-shutterstock_409664776.jpg',
        title:"Conchas de pan",
        precio:"5$"
    },
    {
        key:'2',
        image:'https://static.wixstatic.com/media/f64abc_bea9a662a53d4c1caa6baa68153154f9~mv2_d_5141_3427_s_4_2.jpg/v1/fill/w_640,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f64abc_bea9a662a53d4c1caa6baa68153154f9~mv2_d_5141_3427_s_4_2.jpg',
        title:'Escobas',
        precio:"20$"
    },
    {
        key:'3',
        image:'https://img.remediosdigitales.com/69f000/bugatti-chiron-2017-1600-7a/1366_2000.jpg',
        title:"Llantas para coche",
        precio:"5$"
    },
    {
        key:'4',
        image:'https://d1cft8rz0k7w99.cloudfront.net/n/2/6/8/5/268556b262964da6d6d3355048f8db15ea8bc53d_HouseholdPaperProducts_438680_01.jpg',
        title:"Papel higienico",
        precio:"5$"
    }


]

function ProductosRecientes(){
    return(
        <div className='block products'>
            <h2>Productos recientes</h2>
            <Row gutter={[24,24]}>
                {productos.map(producto =>{
                    return (
                        <Col xs={{span:24}} sm={{span:12}} lg={{span:6}} key={producto.key}>
                            <div className='content'>
                                <div className='image'>
                                    <img src={producto.image} alt="producto"/>
                                </div>
                                <h3>{producto.title}</h3>
                                <div className='price'>{producto.precio}</div>
                                <Button type='primary'>Anadir al carrito</Button>

                            </div>
                        
                        
                        </Col>
                    )



                })}

            </Row>

        </div>
    )

}



export default ProductosRecientes