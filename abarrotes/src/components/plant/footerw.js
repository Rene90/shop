import { Col, Row } from 'antd';
import { Avatar, List, Tag } from 'antd';

const featured = [
  {
    image: 'https://images.kglobalservices.com/www.frootloops.com/en_us/product/product_4508504/kicproductimage-119203_new_marsh_optimized.png',
    title: 'Kelloggs FruitLoops',
    cost: '$15',
    link: 'https://www.google.com/'
  },
  {
    image: 'https://images.kglobalservices.com/www.frootloops.com/en_us/product/product_4508504/kicproductimage-119203_new_marsh_optimized.png',
    title: 'Kelloggs FruitLoops',
    cost: '$23',
    link: 'https://www.google.com/'
  },
  {
    image: 'https://images.kglobalservices.com/www.frootloops.com/en_us/product/product_4508504/kicproductimage-119203_new_marsh_optimized.png',
    title: 'Kelloggs FruitLoops',
    cost: '$77',
    link: 'https://www.google.com/'
  },
];

const data = [
  'Checo Perez Gana en Arabia Saudita.',
  'Alfredo Adame se pelea de nuevo.',
  'Captan a Adrian Marcelo con Chessman.',
  'La vida es bella.',
  'What does the Fox said?',
];

function FooterW() {
  return (
    <div className='footerWidget'>
      <div className="container">
        <Row gutter={[24, 24]}>
          {/* featured */}
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={6}>
            <h3>Mas comprado</h3>
            <List
              itemLayout="horizontal"
              dataSource={featured}
              renderItem={item => (
                <List.Item style={{color:'white'}}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.image} />}
                    title={<a href={item.link}>{item.title}</a>}
                    style={{color:'white'}}
                    description={item.cost}
                  />
                </List.Item>
              )}
            />
          </Col>
          {/* top rated */}
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={6}>
            <h3>Mejor calificado</h3>
            <List
              itemLayout="horizontal"
              dataSource={featured}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.image} />}
                    style={{color:'white'}}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.cost}
                  />
                </List.Item>
              )}
            />
          </Col>
          {/* tags */}
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={6}>
            <h3>Etiquetas</h3>
            <div className='tags'>
              <Tag>Programacion</Tag>
              <Tag>
                <a href="https://github.com/ant-design/ant-design/issues/1862">Kitchen</a>
              </Tag>
              <Tag closable>
                GPS
              </Tag>
              <Tag closable>
                Geodesia &amp; Cartografia
              </Tag>
              <Tag>
                Topografia
              </Tag>
            </div>
          </Col>
          {/* recent posts */}
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={6}>
            <h3>Recent posts</h3> 
            <List
              size="small"
              className="recentPost"
              dataSource={data}
              renderItem={(item) => 
              <List.Item>
                {item}
              </List.Item>}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FooterW