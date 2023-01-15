import {
  Grid,
  Button,
  IconButton,
  TextField,
  InputAdornment
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useEffect, useState } from "react";
import { getMaxDaysInMonth } from "../../Utils/dateUtil";
import { ordinal_suffix_of } from "./HeaderCenter";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

interface Props {
  currentDate: Date;
  handleDayChange: (value: Date) => void;
}

function isNumeric(value: string) {
  return /^-?\d+$/.test(value);
}

const HeaderLeft = ({ currentDate, handleDayChange }: Props) => {
  const [localChange, setLocalChange] = useState("");

  useEffect(() => {
    setLocalChange(currentDate.getDate() as any);
  }, [currentDate, setLocalChange]);

  /** Text Box Handlers */
  const handleChange = (input: any) => {
    setLocalChange(input.target.value);
  };

  const handleBlur = () => {
    // Validation to check if it's numeric
    if (!isNumeric(localChange)) {
      setLocalChange(currentDate.getDate() as any);
      console.log("what what");
      return;
    }
    //Validation to see if it's greater than 0 and less than the greatest number of the month
    if (
      getMaxDaysInMonth(currentDate) < parseInt(localChange) ||
      0 >= parseInt(localChange)
    ) {
      setLocalChange(currentDate.getDate() as any);
      console.log("whatttt?", getMaxDaysInMonth(currentDate));
      return;
    }

    handleDayChange(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        parseInt(localChange)
      )
    );
  };

  /** Left and Right handlers */
  const handleButton = (type: "day" | "month", orientation: number) => {
    switch (type) {
      case "day":
        const date = new Date(
          currentDate.getTime() + orientation * (60 * 60 * 24 * 1000)
        );
        handleDayChange(date);
        return;
      case "month":
        const tempDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + orientation,
          currentDate.getDate()
        );
        handleDayChange(tempDate);
        return;
    }
  };

  return (
    <Grid
      item
      style={{ minWidth: "200px" }}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <IconButton
        size="small"
        onClick={() => handleButton("month", -1)}
        style={{
          backgroundColor: "rgb(59, 58, 58)",
          borderRadius: "3px"
        }}
      >
        <KeyboardDoubleArrowLeftIcon />
      </IconButton>
      <IconButton
        size="small"
        onClick={() => handleButton("day", -1)}
        style={{
          backgroundColor: "rgb(59, 58, 58)",
          margin: "0px 3.5px",
          borderRadius: "3px"
        }}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>
      <TextField
        size="small"
        id="outlined-basic"
        variant="outlined"
        inputProps={{ style: { textAlign: "center", padding: "0.35em 0px" } }}
        onChange={handleChange}
        onBlur={handleBlur}
        value={localChange}
        style={{ maxWidth: "45px", marginRight: "0.02em" }}
      />
      <IconButton
        size="small"
        onClick={() => handleButton("day", 1)}
        style={{
          backgroundColor: "rgb(59, 58, 58)",
          margin: "0px 3px",
          borderRadius: "3px"
        }}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
      <IconButton
        size="small"
        onClick={() => handleButton("month", 1)}
        style={{
          backgroundColor: "rgb(59, 58, 58)",
          borderRadius: "3px"
        }}
      >
        <KeyboardDoubleArrowRightIcon />
      </IconButton>
    </Grid>
  );
};

export default HeaderLeft;
