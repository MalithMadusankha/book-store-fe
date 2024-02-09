// reactstrap components
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Alert,
  Row,
} from "reactstrap";
import { SignIn } from "./userService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsage, setErrMsage] = useState([]);

  const [showPsw, setShowPsw] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const history = useHistory();

  const showPasswordHandler = () => setShowPsw(!showPsw);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await SignIn(email, password);

      setTimeout(() => {
        setIsLoading(false);
        setIsError(false);
        setIsSuccess(true);

        history.push("/admin/index");
      }, 2000);
    } catch (error) {
      setIsSuccess(false);
      setIsLoading(false);
      setIsError(true);
      setErrMsage(error.response.data.message);
    }
  };

  return (
    <>
      <Col lg="5" md="7" className="mt-5">
        <Card
          className="shadow border-0"
          style={{ backgroundColor: "#f8f54b81" }}
        >
          <CardBody>
            <div className="text-center  mb-4">
              <h2 className="text-white"> Sign In </h2>
            </div>
            {/* Alerts */}
            {isLoading ? (
              <Alert color="primary">Loading . . .</Alert>
            ) : isSuccess ? (
              <Alert color="success"> Successfully Login</Alert>
            ) : (
              isError && (
                <div>
                  {errMsage.map((err, index) => (
                    <Row key={index}>
                      <Alert color="danger"> {err}</Alert>
                    </Row>
                  ))}
                </div>
              )
            )}
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type={showPsw ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText onClick={showPasswordHandler}>
                      {showPsw ? (
                        <i className="fa fa-eye-slash" />
                      ) : (
                        <i className="fa fa-eye" />
                      )}
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button color="primary" type="submit">
                  Sign in
                </Button>
              </div>
            </Form>
            <div className="mt-2">
              <center>
                <Link className="text-secondary" to="/auth/register">
                  If you don't have account ? Register
                </Link>
              </center>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Login;
