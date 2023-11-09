// LIBRARY IMPORT
import { React, useState } from "react";
import { Button } from "react-bootstrap";
import { FaRedo } from "react-icons/fa";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

const BtnLocation = ({ fetchDataAPI }) => {
  const [timeSync, setTimeSync] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const currentTime = new Date(); // waktu saat ini pada lokasi pengguna
  const timeZone = "Asia/Jakarta"; // zona waktu Jakarta
  const formattedTime = format(
    utcToZonedTime(currentTime, timeZone),
    "dd/MM HH:mm:ss"
  );

  const handleSync = () => {
    setIsLoading(true);
    fetchDataAPI();
    setTimeSync(formattedTime);
    setTimeout(() => setIsLoading(false), 1000);
  };
  return (
    <>
      <Button className="rounded-shape" onClick={() => handleSync()}>
        {isLoading ? (
          <FaRedo className="ms-2 rotate" />
        ) : (
          <>
            {timeSync}
            <FaRedo className="ms-2" />
          </>
        )}
      </Button>
    </>
  );
};
export default BtnLocation;
