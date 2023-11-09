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

const Dashboard = () => {
  const [ dataAPI, setDataAPI ] = useState([])

  // GET DATA FROM API
  const fetchDataAPI = () => {
    axios
      .get("http://serverawos.pythonanywhere.com/DataSensor")
      .then((response) => {
        setDataAPI(response.data[0])
      })
      .catch((error) => {
        console.error("Error :", error)
      })
  }

  useEffect(() => {
    fetchDataAPI()
    const interval = setInterval(() => {
      fetchDataAPI()
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <section id="body">
        <Header fetchDataAPI={fetchDataAPI}/>
        <Row>
          <Col xs={3}>
            <NowCard data={dataAPI}/>
            <h5 className="mt-4 mb-4">Lokasi Gateway</h5>
            <LocationCard />
            <DelayCard data={dataAPI}/>
          </Col>
          <Col xs={9} className="ps-4">
            <TodayCard data={dataAPI}/>
            <h5 className="mt-4 mb-4">Today at</h5>
            <WeatherCard />
          </Col>
        </Row>
      </section>
    </>
  );
};
export default Dashboard;
