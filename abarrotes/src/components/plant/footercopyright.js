import { BackTop } from 'antd';


const payment = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYKNfL6eRAgFW9CaliWwkBpr_Fh6lTxYHVZFZTjJd3Dj2XFhJDY75Djx9BHhEVLV5Pw&usqp=CAU'
function FooterCopyright() {
  return(
    <div className="footerCopyright">
      <div className="container">
        <div className="copyright">©2023 Creado por Rene</div>
        <div className="toTop"><img src={payment} alt="Payment" /></div>
      </div>
      <BackTop />
    </div>
  );
}

export default FooterCopyright;