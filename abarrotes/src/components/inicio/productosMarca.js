import {Col,Row,Button} from 'antd'

const productos= [{
    key:'1',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Panasonic_logo_%28Blue%29.svg/1200px-Panasonic_logo_%28Blue%29.svg.png'},
    {
        key:'2',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Panasonic_logo_%28Blue%29.svg/1200px-Panasonic_logo_%28Blue%29.svg.png',
       
        },
        {
            key:'3',
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Panasonic_logo_%28Blue%29.svg/1200px-Panasonic_logo_%28Blue%29.svg.png',
            
            },
            {
                key:'4',
                image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Panasonic_logo_%28Blue%29.svg/1200px-Panasonic_logo_%28Blue%29.svg.png',
               
                },


]
function ProductosMarca(){
    return (
        <div className='block products'>
            <h2>Marcas de calidad</h2>
            <Row gutter={[24,24]}>
                {productos.map(producto=>{
                    return (
                        <Col xs={{span:12}} sm={{span:6}}  key={producto.key}>
                            <div className='content'>
                                <div className='image'>
                                    <img src={producto.image} alt="producto"/>


                                </div>
                                
                                
                                

                            </div>
                        
                        </Col>
                    )
                })}

            </Row>

        </div>


    )

}


export default ProductosMarca