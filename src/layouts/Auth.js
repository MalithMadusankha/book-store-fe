import AuthNavbar from "components/Navbars/AuthNavbar";
import PublicNavbar from "components/Navbars/PublicNavbar";
import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row } from "reactstrap";

import routes from "routes.js";

const Auth = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div
        style={{
          minHeight: "300px",
          height: "100vh",
          backgroundImage: "url(" + require("../assets/img/auth-bg.jpg") + ")",
          backgroundSize: "100% 100%",
          backgroundPosition: "center top",
        }}
        ref={mainContent}
      >
        <AuthNavbar />

        {/* Page content */}
        <Container>
          <Row className="justify-content-center">
            <Switch>
              {getRoutes(routes)}
              <Redirect from="*" to="/auth/login" />
            </Switch>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Auth;
