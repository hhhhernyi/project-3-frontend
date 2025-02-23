import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Gauge } from "@mui/x-charts";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import ResponsiveAppBar from "../components/Navbar";
import * as userService from '../services/userService'

const HomePage = () => {
  const { user } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({})
   useEffect(()=>{
    async function getUser() {
      const userData = await userService.showUser(user._id)
      setUserDetails(userData)
    }
    getUser()
  },[])
  return (
    <div className="HomePage">
      <ResponsiveAppBar />
      <h1 className="welcomeText">Welcome {userDetails.fullName}</h1>
      <p className="atAGlance">At a glance</p>
      <div className="overview">
        <div className="gaugeComponent">
          <p>Your monthly goal:</p>
          <Gauge
            width={200}
            height={100}
            value={0}
            valueMin={0}
            valueMax={userDetails.monthlyGoal}
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
