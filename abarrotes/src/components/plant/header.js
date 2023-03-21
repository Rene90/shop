import {NavLink} from "react-router-dom"
import {Button, Drawer} from 'antd'
import React, {useState} from 'react'

import {
    MobileOutlined,
    MailOutlined,
    FacebookFilled,
    LinkedinFilled,
    
    InstagramFilled,
    UserOutlined,
    MenuOutlined
} from '@ant-design/icons';

function Encabezado(){
    //iniciamos nuestro estado
    const [visible, setVisible] = useState(false)
    const [size, setSize] = useState(255)
    //Creamos funciones para modicar el estado visible etre true y false
    const showDrawer= ()=>{
        setVisible(true)
        setSize(255)
    }
    const onClose=()=>{
        setVisible(false)
    }
    return (
        <div className="container">
            <div className="topBar">
                <div className="contactInfo">
                    <ul>
                        <li><a href="tel:543654643"><MobileOutlined/> <span>543654643</span> </a></li>
                        <li><a href="mailto:roberto.manzanoislas@ucalgary.ca"><MailOutlined/> <span>roberto.manzanoislas@ucalgary.ca</span> </a></li>
                    </ul>

                </div>
                <div className="otherInfo">
                    <ul className="socialMedia">
                        <li><a href='https://www.facebook.com/renei2'><FacebookFilled/></a></li>
                        <li><a href='https://www.linkedin.com/in/ren%C3%A9-manzano-b72a0996/'><LinkedinFilled/></a></li>
                        <li><a href='https://www.instagram.com/renemanzanoislas90/'><InstagramFilled/></a></li>

                    </ul>
                    <button><UserOutlined/> Mi cuenta</button>

                </div>
            </div>
            {/*header*/}
            <div className="header separator">
                <div className="logo">
                    Tiendita
                </div>
                <div className="mobileVisible">
                    <Button type="primary" onClick={showDrawer}>
                        <MenuOutlined/>
                    </Button>
                    <Drawer placement="right" onClose={onClose} width={size} open={visible}>
                        <nav>
                            <ul>
                                <li><NavLink onClick={onClose} to="/tienda/react/antd/tiendita/">Inicio</NavLink> </li>
                                <li><NavLink onClick={onClose} to="/tienda/react/antd/tiendita/acerca">Acerca</NavLink> </li>
                                <li><NavLink onClick={onClose} to="/tienda/react/antd/tiendita/productos">Productos</NavLink> </li>
                                <li><NavLink onClick={onClose} to="/tienda/react/antd/tiendita/preguntas">Preguntas mas comunes</NavLink> </li>
                                <li><NavLink onClick={onClose} to="/tienda/react/antd/tiendita/contacto">Contacto</NavLink> </li>
                            </ul>
                        </nav>
                        
                    </Drawer>

                </div>
                <nav className="mobileHidden">
                    <ul>
                    <li><NavLink  to="/tienda/react/antd/tiendita">Inicio</NavLink> </li>
                                <li><NavLink  to="/tienda/react/antd/tiendita/acerca">Acerca</NavLink> </li>
                                <li><NavLink  to="/tienda/react/antd/tiendita/productos">Productos</NavLink> </li>
                                <li><NavLink  to="/tienda/react/antd/tiendita/preguntas">Preguntas mas comunes</NavLink> </li>
                                <li><NavLink  to="/tienda/react/antd/tiendita/contacto">Contacto</NavLink> </li>
                    </ul>

                </nav>

            </div>


        </div>

    )


}

export default Encabezado