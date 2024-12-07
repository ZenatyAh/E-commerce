import { Container } from "react-bootstrap";
import style from "./style.module.css"
import Header from '../../components/common/header/header';
import Footer from "../../components/common/footer/footer";
const {container , wrapper} = style;

const MainLayout = () => {
  return (
    <Container className={container}>
            <Header/>
            <div className={wrapper}></div>
            <Footer/>
    </Container>
  )
};

export default MainLayout;
