// LIBRARY IMPORT
import { React } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
const DelayCard = (props) => {
  return (
    <>
      <div className="card pt-3 pb-2 mt-3">
        <Stack direction="vertical" gap={1}>
          <p className="font-title-grey">Waktu Sensor</p>
          <h6 className="">{props.data['Waktu_Sensor']}</h6>
        </Stack>
      </div>
      <div className="card pt-3 pb-2 mt-2">
        <Stack direction="vertical" gap={1}>
          <p className="font-title-grey">Waktu Gateway</p>
          <h6 className="">{props.data['Waktu_Gateway']}</h6>
        </Stack>
      </div>
      <div className="card pt-3 pb-2 mt-2">
        <Stack direction="vertical" gap={1}>
          <p className="font-title-grey">Waktu Server</p>
          <h6 className="">{props.data['Waktu_Server']}</h6>
        </Stack>
      </div>
    </>
  );
};
export default DelayCard;
