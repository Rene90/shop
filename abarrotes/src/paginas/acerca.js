import {Tabs} from 'antd'
const {TabPane}=Tabs
const imagen = 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/280280972_10161973172892818_3812085676744702714_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=rMP7K3l2x0IAX8Y09gw&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfBPIrMpyvodia618p5tpvrmxdKoNs3U3BxbiQqb_j_bsQ&oe=641CED76'

function Acerca(){
    return (
        <div className='block aboutPage'>
            <div className='container'>
                <h2 >Acerca de nosotros</h2> 
                <div className='bannerImage'>
                    <img src={imagen} alt="Rene"/>
                </div>
                <Tabs defaultActiveKey='1'>
                    <TabPane tab="Acerca de mi" key="1">
                        <p>Soy instructor de codigo, candidato a doctor y maestro asistente en la Universidad de Calgary en Canada.</p>
                        <p>In amet amet nulla quis nostrud. Dolor in dolore magna irure veniam anim sit. Magna et mollit laboris esse Lorem et. Fugiat est qui ipsum amet do minim cupidatat occaecat. Nostrud ad ad id mollit officia ut sunt et laboris.</p>
                        <p>Mollit eiusmod labore dolore occaecat exercitation et.</p>
                    </TabPane>
                    <TabPane tab="Inversionistas" key="2">
                        <p>Actualmente cuento con 0 inversionistas. Pero me propondre a capturar la atencion de diversos inversionistas</p>
                        <p>In amet amet nulla quis nostrud. Dolor in dolore magna irure veniam anim sit. Magna et mollit laboris esse Lorem et. Fugiat est qui ipsum amet do minim cupidatat occaecat. Nostrud ad ad id mollit officia ut sunt et laboris.</p>
                        <p>Mollit eiusmod labore dolore occaecat exercitation et.</p>
                    </TabPane>
                    <TabPane tab="Ofertas Laborales" key="3">
                        <p>Desarrolla una carrera como desarrollador de aplicaciones e commerce con nosotros.</p>
                        <p>In amet amet nulla quis nostrud. Dolor in dolore magna irure veniam anim sit. Magna et mollit laboris esse Lorem et. Fugiat est qui ipsum amet do minim cupidatat occaecat. Nostrud ad ad id mollit officia ut sunt et laboris.</p>
                        <p>Mollit eiusmod labore dolore occaecat exercitation et.</p>
                    </TabPane>

                </Tabs>

            </div>

        </div>



    )


}


export default Acerca
