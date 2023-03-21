import {Col,Row} from 'antd'
const imagen1 ="https://revistavive.com/wp-content/uploads/2020/11/MUJERES-GRANDE.png"
const imagen2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs-Tkh_Pp1KSoncpaYTU-SFio8PLydMGkeV1R895OaSkhcE251v9nL39GrqnJn4PnkQlA&usqp=CAU"
function Informacion(){
    return (
        <div className='block informationBlock'>
            <Row gutter={[24,24]}>
                <Col xs={{span:24}} md={{span:12}}>
                    <div className='holder' style={{backgroundImage:`url(${imagen1})`, backgroundRepeat:'no-repeat'}}>
                        <h3>
                            Todos los productos escenciales desde
                        </h3>
                        <div className='price'>60$</div>



                    </div>
                
                </Col>

                <Col xs={{span:24}} md={{span:12}}>
                    <div className='holder' style={{backgroundImage:`url(${imagen2})`, backgroundRepeat:'no-repeat'}}>
                        <h3>
                           Envios el mismo dia
                        </h3>
                        <p>Gratis en compras mayores a $200</p>



                    </div>
                
                </Col>


            </Row>

        </div>


    )



}

export default Informacion