// LIBRARY IMPORT
import { React } from "react";
import { Row, Col, Button } from "react-bootstrap";

// ASSETS IMPORT
import Icon from "../Assets/Icon.png";
import BtnLocation from "./BtnLocation";

const Header = ({fetchDataAPI}) => {
  return (
    <>
      <Row className="mb-4">
        <Col xs={10}>
            <img src={Icon} alt="Brand" width={175}/>
        </Col>
        <Col xs={2} className="">
            <BtnLocation fetchDataAPI={fetchDataAPI}/>
        </Col>
      </Row>
    </>
  );
};
export default Header;
