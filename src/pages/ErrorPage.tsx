import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Container className="notFound">
        <h1>404</h1>
        <p>Page Not Found</p>
        <Link to="/" replace={true}>
        The page seem Not Found ! <br/>
        The page seem Not Found !
        </Link>
    </Container>
  )
};

export default ErrorPage;
