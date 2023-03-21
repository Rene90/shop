import {Col, Row, Button, Menu, Dropdown, message, Space} from 'antd'
import {DownOutlined} from "@ant-design/icons"
import {useState, useEffect} from "react"
const productos= [{
    key:'1',
    image:'http://cdn.shopify.com/s/files/1/0558/8143/3147/products/ChocoKrispiesCereal-23.3oz-Kellogg_s.webp?v=1675212241',
    titulo:"Cereal Kellogs Choco Crispis",
    precio:"$70"
},
{
    key:'2',
    image:'http://cdn.shopify.com/s/files/1/0558/8143/3147/products/ChocoKrispiesCereal-23.3oz-Kellogg_s.webp?v=1675212241',
    titulo:"Tigre Kellogs Choco Crispis",
    precio:"$120"
},
{
    key:'3',
    image:'http://cdn.shopify.com/s/files/1/0558/8143/3147/products/ChocoKrispiesCereal-23.3oz-Kellogg_s.webp?v=1675212241',
    titulo:"Zebra Kellogs Choco Crispis",
    precio:"$35"
},
{
    key:'4',
    image:'http://cdn.shopify.com/s/files/1/0558/8143/3147/products/ChocoKrispiesCereal-23.3oz-Kellogg_s.webp?v=1675212241',
    titulo:"Futilupis Kellogs Choco Crispis",
    precio:"$30"
},
{
    key:'5',
    image:'http://cdn.shopify.com/s/files/1/0558/8143/3147/products/ChocoKrispiesCereal-23.3oz-Kellogg_s.webp?v=1675212241',
    titulo:"Zucaritas Kellogs Choco Crispis",
    precio:"$40"
},
{
    key:'6',
    image:'http://cdn.shopify.com/s/files/1/0558/8143/3147/products/ChocoKrispiesCereal-23.3oz-Kellogg_s.webp?v=1675212241',
    titulo:"Chocomilk Kellogs Choco Crispis",
    precio:"$88"
},
{
    key:'7',
    image:'http://cdn.shopify.com/s/files/1/0558/8143/3147/products/ChocoKrispiesCereal-23.3oz-Kellogg_s.webp?v=1675212241',
    titulo:"Pantera Kellogs Choco Crispis",
    precio:"$111"
},
{
    key:'8',
    image:'http://cdn.shopify.com/s/files/1/0558/8143/3147/products/ChocoKrispiesCereal-23.3oz-Kellogg_s.webp?v=1675212241',
    titulo:"Gallito Kellogs Choco Crispis",
    precio:"$17"
}

]
//https://stackoverflow.com/questions/63645936/adding-element-to-antd-dropdown-overlay-property-results-in-react-single-child-e  
//Tenemos que usar const items  y menuprops en lugar del componente Menu que ya esta depreciado
//importar use state y use effect para poner estado, y cambiar la renderizacion de acuerdo a como acomodamos los productos


const items = [{
    label:"A a Z",
    key:"1"},
    {
        label:"Precio Menor a Mayor",
        key:"2"},
        {
            label:"Precio Mayor a Menor",
            key:"3"}]

//Esto esta depreciado ya
const menu = (
    <Menu
     items={[
        {
            key:"1",
            label:(
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    A a Z
                </a>
            )

        },
        {
            key:"2",
            label:(
                <a target="_blank" rel="noopener noreferrer" href="https://ww.devf.com">
                    Precio:Menor a Mayor
                </a>
            )

        },
        {
            key:"3",
            label:(
                <a target="_blank" rel="noopener noreferrer" href="https://www.rene.manzano.com">
                    Precio:Mayor a Menor
                </a>
            )
        }
     ]}    
    />
)//Aqui termina el menu depreciado
function Productos(){
    const [cereales, setCereales] = useState([])
    const llenarCereales = ()=>{
        setCereales(productos)
    }
    var precios
    const onClick= ({key})=>{
        message.info(`Presionaste la llave ${key}`)
        if(key =="1"){
            var cerealesProv= cereales
            precios = cerealesProv.map((elementos,indices)=>{
              return(
                {
                    precio:elementos.precio,
                    key:elementos.key,
                    image:elementos.image,
                    titulo:elementos.titulo,
                    precionum:parseFloat(elementos.precio.split("$")[1])

                }
                
              )


            })
            var preciosOrdenados= precios.sort(function (a, b) {
                if (a.titulo > b.titulo) {
                  return 1;
                }
                if (a.titulo < b.titulo) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              })

              setCereales(preciosOrdenados)
        }
      
        if(key =="2"){
            var cerealesProv= cereales
            precios = cerealesProv.map((elementos,indices)=>{
              return(
                {
                    precio:elementos.precio,
                    key:elementos.key,
                    image:elementos.image,
                    titulo:elementos.titulo,
                    precionum:parseFloat(elementos.precio.split("$")[1])

                }
                
              )


            })
            var preciosOrdenados= precios.sort(function (a, b) {
                if (a.precionum > b.precionum) {
                  return 1;
                }
                if (a.precionum < b.precionum) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              })

              setCereales(preciosOrdenados)
        }

        if(key =="3"){
            var cerealesProv= cereales
            precios = cerealesProv.map((elementos,indices)=>{
              return(
                {
                    precio:elementos.precio,
                    key:elementos.key,
                    image:elementos.image,
                    titulo:elementos.titulo,
                    precionum:parseFloat(elementos.precio.split("$")[1])

                }
                
              )


            })
            var preciosOrdenados= precios.sort(function (a, b) {
                if (a.precionum < b.precionum) {
                  return 1;
                }
                if (a.precionum > b.precionum) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              })

              setCereales(preciosOrdenados)
        }
    
    }
    useEffect(()=>llenarCereales(),[])
    return (
        <div className='block products shopPage'>
            <div className='container'>
                <div className='titleHolder'>
                    <h2>Tienda</h2>
                    <Dropdown menu={{items,onClick}} placement="bottomLeft">
                        {/*<Button>Acomodar por</Button>*/}
                        <a onClick={(e)=>e.preventDefault()}>
                            <Space>
                                Acomodar por
                                <DownOutlined/> 
                            </Space>
                        </a>

                    </Dropdown>
                </div>
                <Row gutter={[24,24]}>
                    {cereales.map(producto=>{
                        return(
                            <Col xs={{span:24}} sm={{span:12}} lg={{span:6}} key={producto.key}>
                                <div className='content'>
                                    <div className='image'>
                                        <img src={producto.image} alt="produto"/>
                                    </div>
                                    <h3>{producto.titulo}</h3>
                                    <div className='price'>
                                        {producto.precio}
                                    </div>
                                    <Button type='primary'>Echar al carrito</Button>

                                </div>
                            </Col>
                        )
                    })}

                </Row>
            </div>

        </div>

    )
}

export default Productos