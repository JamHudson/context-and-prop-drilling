import { useContext } from "react";
import CurrentConditions from "./CurrentConditions.jsx";
import HourlyStrip from "./HourlyStrip.jsx";
import { CityContext } from "../context/CityContext.jsx";

function TodayPage() {
  const { city } = useContext( CityContext );

  return (
    <section className="page">
      <h2 className="page-title">
        {city.name}, {city.region}
      </h2>
      <CurrentConditions current={city.current} />
      <HourlyStrip hours={city.hourly}/>
    </section>
  );
}

export default TodayPage;
