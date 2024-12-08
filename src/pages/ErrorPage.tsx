import { Container } from "react-bootstrap";
import { Link , useRouteError, isRouteErrorResponse} from "react-router-dom";
// Dynmic Error Routing
const ErrorPage = () => {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  if(isRouteErrorResponse(error)){
    // if the error from react-router-dom
    errorStatus = error.status;
    errorStatusText = error.statusText;
  }else{
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }

  return (
    <Container className="notFound">
        <h1>{errorStatus}</h1>
        <p>{errorStatusText}</p>
        <Link to="/" replace={true}>
        The page seem Not Found ! <br/>
        The page seem Not Found !
        </Link>
    </Container>
  )
};

export default ErrorPage;
