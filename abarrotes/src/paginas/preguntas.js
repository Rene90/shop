import { Collapse } from "antd";
const {Panel} = Collapse

function Preguntas(){
    return(
    <div className="block faqPage">
        <div className="container">
            <h2>Preguntas mas comunes</h2>
            <Collapse accordion defaultActiveKey={['1']}>
                <Panel header="Entrega de pedidos" key="1">
                    <p>
                        Proident amet laborum occaecat eu ipsum do aliquip cillum et laboris incididunt amet. Proident sunt dolore quis eu proident nostrud velit adipisicing et cupidatat nisi do ipsum. In irure ut esse exercitation. Eu et magna enim laborum sint consequat mollit. Adipisicing officia culpa ea do id aliqua aliquip consectetur. Excepteur id ad magna velit anim nulla esse anim mollit excepteur sint eu voluptate.
                    </p>
                </Panel>
                <Panel header="Un prodcuto en oferta es sujeto a devolucion?" key="2">
                    <p>
                        Proident amet laborum occaecat eu ipsum do aliquip cillum et laboris incididunt amet. Proident sunt dolore quis eu proident nostrud velit adipisicing et cupidatat nisi do ipsum. In irure ut esse exercitation. Eu et magna enim laborum sint consequat mollit. Adipisicing officia culpa ea do id aliqua aliquip consectetur. Excepteur id ad magna velit anim nulla esse anim mollit excepteur sint eu voluptate.
                    </p>
                </Panel>
                <Panel header="Devoluciones en fechas fuera de rango" key="3">
                    <p>
                        Proident amet laborum occaecat eu ipsum do aliquip cillum et laboris incididunt amet. Proident sunt dolore quis eu proident nostrud velit adipisicing et cupidatat nisi do ipsum. In irure ut esse exercitation. Eu et magna enim laborum sint consequat mollit. Adipisicing officia culpa ea do id aliqua aliquip consectetur. Excepteur id ad magna velit anim nulla esse anim mollit excepteur sint eu voluptate.
                    </p>
                </Panel>
                <Panel header="Las ofertas se pueden acumular?" key="4">
                    <p>
                        Proident amet laborum occaecat eu ipsum do aliquip cillum et laboris incididunt amet. Proident sunt dolore quis eu proident nostrud velit adipisicing et cupidatat nisi do ipsum. In irure ut esse exercitation. Eu et magna enim laborum sint consequat mollit. Adipisicing officia culpa ea do id aliqua aliquip consectetur. Excepteur id ad magna velit anim nulla esse anim mollit excepteur sint eu voluptate.
                    </p>
                </Panel>
                <Panel header="Requisitos para una devolucion" key="5">
                    <p>
                        Proident amet laborum occaecat eu ipsum do aliquip cillum et laboris incididunt amet. Proident sunt dolore quis eu proident nostrud velit adipisicing et cupidatat nisi do ipsum. In irure ut esse exercitation. Eu et magna enim laborum sint consequat mollit. Adipisicing officia culpa ea do id aliqua aliquip consectetur. Excepteur id ad magna velit anim nulla esse anim mollit excepteur sint eu voluptate.
                    </p>
                </Panel>
                <Panel header="Donde puedo reclamar productos extraviados" key="6">
                    <p>
                        Proident amet laborum occaecat eu ipsum do aliquip cillum et laboris incididunt amet. Proident sunt dolore quis eu proident nostrud velit adipisicing et cupidatat nisi do ipsum. In irure ut esse exercitation. Eu et magna enim laborum sint consequat mollit. Adipisicing officia culpa ea do id aliqua aliquip consectetur. Excepteur id ad magna velit anim nulla esse anim mollit excepteur sint eu voluptate.
                    </p>
                </Panel>
                <Panel header="Que hacer en caso de que mi producto este abierto" key="7">
                    <p>
                        Proident amet laborum occaecat eu ipsum do aliquip cillum et laboris incididunt amet. Proident sunt dolore quis eu proident nostrud velit adipisicing et cupidatat nisi do ipsum. In irure ut esse exercitation. Eu et magna enim laborum sint consequat mollit. Adipisicing officia culpa ea do id aliqua aliquip consectetur. Excepteur id ad magna velit anim nulla esse anim mollit excepteur sint eu voluptate.
                    </p>
                </Panel>
            </Collapse>

        </div>
    </div>)

}
export default Preguntas