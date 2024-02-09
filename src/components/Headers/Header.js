// reactstrap components
import { Container } from "reactstrap";
import COVER from "../../assets/img/bg3.jpg";
const Header = () => {
  const backgroundStyle = {
    backgroundImage: `url(${COVER})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "50vh",
  };
  return (
    <>
      <div style={backgroundStyle}>
        <Container fluid></Container>
      </div>
    </>
  );
};

export default Header;
