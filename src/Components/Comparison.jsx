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
  return (
    <div className="card mt-3">
      <h5>
        <FaRocket /> Open Weather Map
      </h5>
        <Row>
        <Col xs={4} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">Humidity</div>
              <Stack direction="horizontal" gap={3}>
                <div className="icon-forecast pe-5">
                  <FaTint />
                </div>
                <h2 className="mt-3 ps-3">{props.data["humidity"]} HR</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
        <Col xs={4} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">Light Intensity</div>
              <Stack direction="horizontal" gap={5}>
                <div className="icon-forecast pe-5">
                  <FaRegLightbulb />
                </div>
                {/* <h2 className="mt-3 ps-5">{props.data["Intensitas_Cahaya"]}</h2> */}
                <h2 className="mt-3 ps-5">0</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
        <Col xs={4} className="p-2">
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
        <Col xs={4} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">Wind Wave Direction</div>
              <Stack direction="horizontal" gap={5}>
                <div className="icon-forecast pe-3">
                  <FaRegCompass />
                </div>
                <h2 className="mt-3">{props.data["wind_dir"]}</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
        <Col xs={4} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">Rainfall</div>
              <Stack direction="horizontal" gap={5}>
                <div className="icon-forecast pe-3">
                  <FaCloudShowersHeavy />
                </div>
                <h2 className="mt-3 ps-1">0 MM</h2>
                {/* <h2 className="mt-3 ps-5">{props.data["Intensitas_Hujan"]}</h2> */}
              </Stack>
            </Stack>
          </div>
        </Col>
        <Col xs={4} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">UV A / UV B</div>
              <Stack direction="horizontal" gap={5}>
                <div className="icon-forecast pe-5">
                  <FaRegSun />
                </div>
                <h2 className="mt-3 ps-1">{props.data["uv"]} nm</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Comparison;
