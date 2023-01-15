import "./styles.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./Header";

import { CanvasWrapper } from "./CalendarCanvas";
import { useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

export default function App() {
  const [date, setDate] = useState(new Date(Date.now()));

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App dark">
        <Header
          currentDate={date}
          handleDayChange={(newDate: Date) => setDate(newDate)}
          handlePublish={() => console.log("publish!!!")}
        />
        <CanvasWrapper />
      </div>
    </ThemeProvider>
  );
}
