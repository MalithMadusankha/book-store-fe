// reactstrap components
import { useState } from "react";
import { useHistory } from "react-router-dom";
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
} from "reactstrap";
import { SignUp } from "./userService";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const [rePsw, setRePsw] = useState("");

  const [showPsw, setShowPsw] = useState(false);

  const [errMsage, setErrMsage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const history = useHistory();

  const showPasswordHandler = () => setShowPsw(!showPsw);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (psw !== rePsw) {
      setIsError(true);
      setErrMsage("Password is not match !!!");
      return;
    }
    setIsError(false);
    setErrMsage("");
    setIsLoading(true);
    const user = {
      first_name: name,
      email,
    };
    try {
      await SignUp(user, psw);
      setTimeout(() => {
        setIsLoading(false);
        setIsError(false);
        setIsSuccess(true);
        history.push("/auth/login");
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
      <Col lg="5" md="8" className="mt-3">
        <Card
          className="shadow border-0"
          style={{ backgroundColor: "#f8f54b81" }}
        >
          <CardBody>
            <div className="text-center text-muted mb-3">
              <h2 className="text-white"> Sign Up </h2>
            </div>
            {/* Alerts */}
            {isLoading ? (
              <Alert color="primary"> Loading . . .</Alert>
            ) : isSuccess ? (
              <Alert color="success"> Successfully Register</Alert>
            ) : (
              isError && <Alert color="danger"> {errMsage}</Alert>
            )}
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-2">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    type="text"
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-2">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
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
                    value={psw}
                    onChange={(e) => setPsw(e.target.value)}
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
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Re-Password"
                    type={showPsw ? "text" : "password"}
                    value={rePsw}
                    onChange={(e) => setRePsw(e.target.value)}
                    required
                  />
                </InputGroup>
              </FormGroup>

              <div className="text-center">
                <Button className="mt-1" color="primary" type="submit">
                  Create account
                </Button>
              </div>
            </Form>
            <div className="mt-2">
              <center>
                <Link className="text-secondary" to="/auth/login">
                  Do you have already account ? Login{" "}
                </Link>
              </center>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
