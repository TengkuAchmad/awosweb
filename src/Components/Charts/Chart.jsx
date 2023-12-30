// LIBRARY IMPORT
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

// REQUEST IMPORT
import { getDataSensorFull } from "../../../api/request";

const Chart = () => {
  const [dataSensor, setDataSensor] = useState([]);

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchDataSensor = async () => {
      const response = await getDataSensorFull();
      setDataSensor(response.data);
    };

    fetchDataSensor();
  }, []);

  useEffect(() => {
    const processedChartData = dataSensor.map((item) => {
      // Membuat objek tanggal dari string
      const dateObject = new Date(item.CapturedAt);
    
      // Menggunakan metode dari objek tanggal untuk mendapatkan komponen tanggal yang diinginkan
      const formattedDate = `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1).toString().padStart(2, '0')}-${dateObject.getDate().toString().padStart(2, '0')} ${dateObject.getHours().toString().padStart(2, '0')}:${dateObject.getMinutes().toString().padStart(2, '0')}:${dateObject.getSeconds().toString().padStart(2, '0')}`;
      
      console.log(item)
      return {
        date: formattedDate,
        Temperature: item.Temp_DW,
        Rainfall: item.Rainfall_DW,
        Humidity: item.Humidity_DW,
      };
    });
    

    setChartData(processedChartData);
  }, [dataSensor]);

  const options = {
    chart: {
      id: "chart1",
      type:"line",
      toolbar: {
        show: true, 
      },
      pan: {
        enabled: true,
        mode: "x",
      },
    },
    xaxis: {
      type: "datetime",
      min: new Date().getTime() - 14 * 24 * 60 * 60 * 1000,
      max: new Date().getTime()
    },
    yaxis: {
      title: {
        text: "Nilai",
      },
    },
  };

  return (
    <>
      <div className="mb-5 chart-custom">
        <ReactApexChart
          options={options}
          series={[
            {
              name: "Rainfall",
              data: chartData.map((data) => ({
                x: data.date,
                y: data.Rainfall,
              })),
              strokeWidth:0.1,
            },
            {
              name: "Temperature",
              data: chartData.map((data) => ({
                x: data.date,
                y: data.Temperature,
              })),
              strokeWidth:0.1,
            },
            {
              name: "Humidity",
              data: chartData.map((data) => ({
                x: data.date,
                y: data.Humidity,
              })),
              strokeWidth:0.1,
            }  
          ]}
          width={900}
          height={275}
        />
      </div>
    </>
  );
};

export default Chart;
