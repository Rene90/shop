import {Button, Form, Input, Select} from 'antd';

const {Option}=Select;
const {TextArea}=Input;

function Contacto(){
    const prefixSelector =(
        <Form.Item name="prefix" noStyle>
            <Select
            style={{
                width:70,

            }}
            >
                <Option value="52">+52</Option>
                <Option value="56">+56</Option>
                <Option value="1">+1</Option>
            </Select>


        </Form.Item>
    )
    return(
        <div className='block contactPage'>
            <div className='container'>
                <h2>Contacto</h2>
                <Form
                    name="basic"
                    initialValues={{remember:true}}
                    autoComplete="off"
                    layout='vertical'
                    size='large'
                >
                    <Form.Item
                        label="Fullname"
                        name="fullname"
                        rules={[{required:true,message:"Por favor ingresa tu nombre completo"}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{required:true,type:"email",message:"Por favor ingresa tu correo electronico"}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{required:true,message:"Por favor ingresa tu telefono"}]}
                    >
                        <Input
                            addonBefore={prefixSelector}
                            style={{width:'100%'}}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Message"
                        name="message"
                        rules={[{required:true,message:"Ingresa el mensaje"}]}
                    >
                        <TextArea rows={4}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            Enviar
                        </Button>
                    </Form.Item>


                </Form>
            </div>

        </div>
    )

}
export default Contacto