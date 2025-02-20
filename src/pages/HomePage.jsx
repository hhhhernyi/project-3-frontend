import { useContext } from "react";
import Navbar from "../components/Navbar";
import { UserContext } from "../Contexts/UserContext";
import { Gauge } from "@mui/x-charts";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="HomePage">
      <Navbar />
      <h1 className="welcomeText">Welcome {user.username}</h1>
      <p className="atAGlance">At a glance</p>
      <div className="overview">
        <div className="gaugeComponent">
          <p>Your monthly goal:</p>
          <Gauge
            width={200}
            height={100}
            value={45}
            valueMin={0}
            valueMax={60}
            startAngle={-90}
            endAngle={90}
            text={({ value, valueMax }) => `$${value} / $${valueMax}`}
          />
        </div>
        <div className="calendarComponent">
          <p>Weekly Calendar</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
