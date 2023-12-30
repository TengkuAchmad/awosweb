// LIBRARY IMPORT
import { React } from "react";
import { Row, Col, Button } from "react-bootstrap";

// ASSETS IMPORT
import Icon from "../assets/Icon.png";
import BtnLocation from "./BtnLocation";

const Header = ({fetchDataSensor}) => {
  return (
    <>
      <Row className="mb-4">
        <Col xs={10}>
            <img src={Icon} alt="Brand" width={175}/>
        </Col>
        <Col xs={2} className="">
            <BtnLocation fetchDataSensor={fetchDataSensor}/>
        </Col>
      </Row>
    </>
  );
};
export default Header;
