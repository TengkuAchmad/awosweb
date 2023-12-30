// LIBRARY IMPORT
import { ReactComponentElement, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

// COMPONENTS IMPORT
import Header from "../Components/Header";
import NowCard from "../Components/NowCard";
import LocationCard from "../Components/LocationCard";
import TodayCard from "../Components/TodayCard";
import WeatherCard from "../Components/WeatherCard";
import DelayCard from "../Components/DelayCard";
import Comparison from "../Components/Comparison";
import Chart from "../Components/Charts/Chart";

// REQUEST IMPORT
import { getDataSensor } from "../../api/request";

// CONTEXT IMPORT
import { useData } from "../DataContext";

const Dashboard = () => {
  const { setResponse } = useData();
  const [isLoading, setIsLoading] = useState(true);

  const fetchDataSensor = async () => {
    try {
      const response = await getDataSensor();
      setResponse(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error on request :", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataSensor();
    const interval = setInterval(() => {
      fetchDataSensor();
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isLoading) {
    return <></>
  }

  return (
    <>
      <section id="body">
        <Header fetchDataSensor={fetchDataSensor} />
        <Row>
          <Col xs={3}>
            <NowCard />
            <h5 className="mt-4 mb-4">Lokasi Gateway</h5>
            <LocationCard node="gateway"/>
            <h5 className="mt-4 mb-4">Lokasi Node Sensor</h5>
            <LocationCard node="aws"/>
            <DelayCard  />
          </Col>
          <Col xs={9} className="ps-4">
            <Chart />
            <TodayCard/>
            <Comparison />
            <h5 className="mt-4 mb-4">Today at</h5>
            <WeatherCard />
          </Col>
        </Row>
      </section>
    </>
  );
};
export default Dashboard;
