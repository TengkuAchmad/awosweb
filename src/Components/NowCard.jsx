// LIBRARY IMPORT
import { Row, Col, Stack } from "react-bootstrap";

// ASSETS IMPORT
import { FaCloud, FaCalendarDay, FaMapMarkerAlt } from "react-icons/fa";

const NowCard = (props) => {
  return (
    <div className="card">
      <Stack direction="horizontal" gap={3}>
        <Stack direction="vertical" gap={1}>
          <div>
            <h5>Now</h5>
          </div>
          <div>
            <h1>{props.data["Suhu"]}°C</h1>
          </div>
          <div>
            <h6>Broken Clouds</h6>
          </div>
        </Stack>
        <Stack direction="vertical" gap={1}>
          <div className="icons-cloud">
            <FaCloud />
          </div>
        </Stack>
      </Stack>
      <div className="border-white"></div>
      <Stack direction="horizontal" gap={3}>
        <Stack direction="vertical" gap={3}>
          <FaCalendarDay />
          <FaMapMarkerAlt />
        </Stack>
        <Stack direction="vertical" gap={1}>
          <div>
            {props.data["Waktu_Server"].length > 1
              ? props.data["Waktu_Server"].slice(0, 17)
              : props.data["Waktu_Server"]}
          </div>
          <div>Bandung, Indonesia</div>
        </Stack>
      </Stack>
    </div>
  );
};
export default NowCard;
