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

const TodayCard = (props) => {
  return (
    <div className="card">
      <h5>
        <FaRocket /> Today Highlights
      </h5>
      <Row>
        <Col xs={8} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="">Agriculture Node</div>
              <Stack direction="horizontal">
                <div className="pe-4">
                  <Stack direction="vertical mx-auto" gap={0}>
                    <p className="font-grey">Soil Moisture</p>
                    <h2>{props.data["Kelembapan_Tanah"]}</h2>
                  </Stack>
                </div>
                <div className="pe-4">
                  <Stack direction="vertical mx-auto" gap={0}>
                    <p className="font-grey">Soil Temp</p>
                    <h2>{props.data["Suhu_Tanah"]}</h2>
                  </Stack>
                </div>
                <div className="pe-4">
                  <Stack direction="vertical mx-auto" gap={0}>
                    <p className="font-grey">Nitrogen</p>
                    <h2>{props.data["Nitrogen"]}</h2>
                  </Stack>
                </div>
                <div className="pe-4">
                  <Stack direction="vertical mx-auto" gap={0}>
                    <p className="font-grey">Phospor</p>
                    <h2>{props.data["Fosfor"]}</h2>
                  </Stack>
                </div>
                <div className="pe-4">
                  <Stack direction="vertical mx-auto" gap={0}>
                    <p className="font-grey">Calium</p>
                    <h2>{props.data["Kalium"]}</h2>
                  </Stack>
                </div>
                <div className="pe-4">
                  <Stack direction="vertical mx-auto" gap={0}>
                    <p className="font-grey">Ph Soil</p>
                    <h2>{props.data["PH_Tanah"]}</h2>
                  </Stack>
                </div>
              </Stack>
            </Stack>
          </div>
        </Col>
        <Col xs={4} className="p-2">
          <Carousel indicators={false} controls={false}>
            <Carousel.Item interval={2000}>
              <div className="card-darker pb-4">
              <div className="pb-4">Gateway Battery</div>
                <Stack direction="horizontal">
                  <div className="pe-3">
                    <Stack direction="vertical" gap={0}>
                      <div className="font-grey">Battery Life</div>
                      <h3>75%</h3>
                    </Stack>
                  </div>
                  <div className="pe-3">
                    <Stack direction="vertical" gap={0}>
                      <div className="font-grey">Current</div>
                      <h3>10A</h3>
                    </Stack>
                  </div>
                  <div className="">
                    <Stack direction="vertical" gap={0}>
                      <div className="font-grey">Voltage</div>
                      <h3>10V</h3>
                    </Stack>
                  </div>
                </Stack>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div className="card-darker pb-4">
              <div className="pb-4">Node Battery</div>
                <Stack direction="horizontal">
                  <div className="pe-3">
                    <Stack direction="vertical" gap={0}>
                      <div className="font-grey">Battery Life</div>
                      <h3>50%</h3>
                    </Stack>
                  </div>
                  <div className="pe-3">
                    <Stack direction="vertical" gap={0}>
                      <div className="font-grey">Current</div>
                      <h3>20A</h3>
                    </Stack>
                  </div>
                  <div className="">
                    <Stack direction="vertical" gap={0}>
                      <div className="font-grey">Voltage</div>
                      <h3>20V</h3>
                    </Stack>
                  </div>
                </Stack>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col xs={4} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">Humidity</div>
              <Stack direction="horizontal" gap={5}>
                <div className="icon-forecast pe-5">
                  <FaTint />
                </div>
                <h2 className="mt-3 ps-5">{props.data["Kelembapan"]}%</h2>
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
                <h2 className="mt-3 ps-5">{props.data["Intensitas_Cahaya"]}</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
        <Col xs={4} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">Air Pressure</div>
              <Stack direction="horizontal" gap={4}>
                <div className="icon-forecast">
                  <FaCompressAlt />
                </div>
                <h2 className="mt-3">{props.data["Tekanan_Udara"]}</h2>
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
                <h2 className="mt-3">{props.data["Arah_Angin"]}</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
        <Col xs={4} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">Rainfall</div>
              <Stack direction="horizontal" gap={5}>
                <div className="icon-forecast pe-5">
                  <FaCloudShowersHeavy />
                </div>
                <h2 className="mt-3 ps-5">{props.data["Intensitas_Hujan"]}</h2>
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
                <h2 className="mt-3 ps-5">{props.data["Intensitas_UV"]}</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TodayCard;
