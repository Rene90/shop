import {Col,Row,Button} from 'antd'

const productos= [{
    key:'1',
    image:'https://cdn.thewirecutter.com/wp-content/media/2022/06/ps5controllers-2048px-1011569-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024',
    titulo:"Playstation 5 edicion limitada roja",
    oferta:'$9,000',
    precio:'$14,000'
    },
    {
        key:'2',
        image:'https://cdn.thewirecutter.com/wp-content/media/2022/06/ps5controllers-2048px-1011569-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024',
        titulo:"Playstation 5 edicion limitada roja",
        oferta:'$9,000',
        precio:'$14,000'
        },
        {
            key:'3',
            image:'https://cdn.thewirecutter.com/wp-content/media/2022/06/ps5controllers-2048px-1011569-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024',
            titulo:"Playstation 5 edicion limitada roja",
            oferta:'$9,000',
            precio:'$14,000'
            },
            {
                key:'4',
                image:'https://cdn.thewirecutter.com/wp-content/media/2022/06/ps5controllers-2048px-1011569-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024',
                titulo:"Playstation 5 edicion limitada roja",
                oferta:'$9,000',
                precio:'$14,000'
                },


]
function ProductosOferta(){
    return (
        <div className='block products separator'>
            <h2>Productos en Oferta</h2>
            <Row gutter={[24,24]}>
                {productos.map(producto=>{
                    return (
                        <Col xs={{span:24}} sm={{span:12}} lg={{span:6}} key={producto.key}>
                            <div className='content'>
                                <div className='image'>
                                    <img src={producto.image} alt="producto"/>


                                </div>
                                <h3>{producto.titulo}</h3>
                                <div className='price'>
                                    <span className='salePrice'>{producto.precio}</span>
                                    {producto.oferta}
                                </div>
                                <Button type="primary">Echar al carrito</Button>

                            </div>
                        
                        </Col>
                    )
                })}

            </Row>

        </div>


    )

}


export default ProductosOferta