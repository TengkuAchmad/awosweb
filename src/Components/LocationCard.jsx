// LIBRARY IMPORT
import { Row, Col, Stack } from "react-bootstrap";

// ASSETS IMPORT
import { FaCloud, FaCalendarDay, FaMapMarkerAlt } from "react-icons/fa";

const LocationCard = () => {
  return (
    <div className="card">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=-6.1757531,106.8238427&t=&z=110&ie=UTF8&iwloc=&output=embed" scrolling="no" ></iframe>
            </div>
        </div>
    </div>
  );
};

export default LocationCard;
