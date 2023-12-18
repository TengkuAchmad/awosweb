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

const Dashboard = () => {
  const [dataAPI, setDataAPI] = useState([]);
  const [dataAPI2, setDataAPI2] = useState([]);

  // GET DATA FROM API
  const fetchDataAPI = () => {
    axios
      .get("https://serverawos.pythonanywhere.com/DataSensor")
      .then((response) => {
        setDataAPI(response.data[0]);
      })
      .catch((error) => {
        console.error("Error :", error);
      });
  };

  const fetchDataAPI2 = () => {
    axios
      .get("https://api.weatherapi.com/v1/current.json?key=aefb5c4abd60414c94b170426231412&q=Bandung&aqi=yes")
      .then((response) => {
        console.log(response.data);
        setDataAPI2(response.data.current);
      })
      .catch((error) => {
        console.error("Error :", error);
      });
  }

  useEffect(() => {
    fetchDataAPI();
    fetchDataAPI2();
    const interval = setInterval(() => {
      fetchDataAPI();
      fetchDataAPI2();
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <>
      <section id="body">
        <Header fetchDataAPI={fetchDataAPI} />
        <Row>
          <Col xs={3}>
            <NowCard data={dataAPI} />
            <h5 className="mt-4 mb-4">Lokasi Gateway</h5>
            <LocationCard />
            <h5 className="mt-4 mb-4">Lokasi Node Sensor</h5>
            <LocationCard />
            <DelayCard data={dataAPI} />
          </Col>
          <Col xs={9} className="ps-4">
            <TodayCard data={dataAPI} />
            <Comparison data={dataAPI2} />
            <h5 className="mt-4 mb-4">Today at</h5>
            <WeatherCard />
          </Col>
        </Row>
      </section>
    </>
  );
};
export default Dashboard;
