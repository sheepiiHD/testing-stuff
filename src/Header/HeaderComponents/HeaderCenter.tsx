import { Grid, Typography } from "@mui/material";

interface Props {
  currentDate: Date;
}

export function ordinal_suffix_of(i: number) {
  var j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) {
    return "st";
  }
  if (j === 2 && k !== 12) {
    return "nd";
  }
  if (j === 3 && k !== 13) {
    return "rd";
  }
  return "th";
}

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

const HeaderCenter = ({ currentDate }: Props) => {
  return (
    <Grid
      item
      style={{ minWidth: "200px" }}
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
    >
      <Typography fontSize={"23px"}>
        {monthNames[currentDate.getMonth()]} {currentDate.getDate()}
        {ordinal_suffix_of(currentDate.getDate())}, {currentDate.getFullYear()}
      </Typography>
    </Grid>
  );
};

export default HeaderCenter;
3;
