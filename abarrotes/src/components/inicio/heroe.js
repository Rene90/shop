import {Col, Row} from 'antd'
import {Carousel} from 'antd'
const imagen1 = 'https://www.mashed.com/img/gallery/the-untold-truth-of-safeway/l-intro-1641239562.jpg'
const imagen2 = 'https://www.terracestandard.com/wp-content/uploads/2022/06/29400873_web1_Safewayremodel-Seq-211103-FULL_8.jpg'
const imagen3 = 'https://imageio.forbes.com/specials-images/imageserve/61dfb413c41a5347337ac51d/0x0.jpg?format=jpg&width=1200'
function Hero(){
    return (
        <div className='heroBlock'>
            <Row gutter={[24,24]}>
                <Col xs={24} lg={18} >
                    <Carousel autoplay>
                        <div>
                            <img src={imagen1} alt="imagen1" />
                        </div>
                        <div>
                            <img src={imagen2} alt="imagen1" />
                        </div>
                        <div>
                            <img src={imagen3} alt="imagen1" />
                        </div>
                    </Carousel>
                </Col>

                <Col xs={24} lg={6}>
                    <div className='heroBlocks'>
                        <div className='holder'>
                            <div className='icon'>
                                <i className='fa-solid fa-truck' title='Edit'></i>
                            </div>
                            <div className='content'>
                                <h3>Envio gratis y devoluciones</h3>
                                <p>Envios gratis en compras mayores a $1000</p>

                            </div>
                        </div>

                        <div className='holder'>
                            <div className='icon'>
                                <i className='fa-solid fa-sack-dollar'></i>
                            </div>
                            <div className='content'>
                                <h3>Garantia de devolucion</h3>
                                <p>Reembolasmos el 100 por ciento de tu dinero</p>

                            </div>
                        </div>

                        <div className='holder'>
                            <div className='icon'>
                                <i className='fa-solid fa-headset'></i>
                            </div>
                            <div className='content'>
                                <h3>Soporte en linea</h3>
                                <p>Contactanos</p>

                            </div>
                        </div>

                    </div>
                </Col>




            </Row>




        </div>



    )
    


}

export default Hero