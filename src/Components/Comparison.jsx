// LIBRARY IMPORT
import { Row, Col, Stack, Carousel } from "react-bootstrap";

// ASSETS IMPORT
import {
  FaRegLightbulb,
  FaRegCompass,
  FaWater,
  FaRegEye,
  FaRegSun,
  FaCloudShowersHeavy,
  FaTint,
  FaCompressAlt,
  FaRocket,
} from "react-icons/fa";

const Comparison = (props) => {
  const getArahAngin = (data) => {
    switch (data) {
      case "N":
        return "UTARA";
      case "NE":
        return "TIMUR LAUT";
      case "E":
        return "TIMUR";
      case "SE":
        return "TENGGARA";
      case "S":
        return "SELATAN";
      case "SW":
        return "BARAT DAYA";
      case "W":
        return "BARAT";
      case "NW":
        return "BARAT LAUT";
      default:
        return data;
    }
  };

  return (
    <div className="card mt-3">
      <h5>
        <FaRocket /> Open Weather Map
      </h5>
      <Row>
        <Col xs={6} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">Humidity</div>
              <Stack direction="horizontal" gap={3}>
                <div className="icon-forecast pe-2">
                  <FaTint />
                </div>
                <h2 className="mt-3 ps-0">{props.data["humidity"]} HR</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
        <Col xs={6} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">Air Pressure</div>
              <Stack direction="horizontal" gap={3}>
                <div className="icon-forecast">
                  <FaCompressAlt />
                </div>
                <h2 className="mt-3">{props.data["pressure_mb"]} Pa</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">Wind Wave Direction</div>
              <Stack direction="horizontal" gap={3}>
                <div className="icon-forecast pe-3">
                  <FaRegCompass />
                </div>
                <h2 className="mt-3">{getArahAngin(props.data["wind_dir"])}</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
        <Col xs={6} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">UV A / UV B</div>
              <Stack direction="horizontal" gap={4}>
                <div className="icon-forecast pe-2">
                  <FaRegSun />
                </div>
                <h2 className="mt-3 ps-0">{props.data["uv"]} nm</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Comparison;
