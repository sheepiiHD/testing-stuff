import OutlinedInput from "@mui/material/OutlinedInput";
import { Paper, Grid } from "@mui/material";
import { HeaderLeft, HeaderCenter, HeaderRight } from "./HeaderComponents";

const months = [];

interface Props {
  handlePublish: () => void;
  handleDayChange: (newDate: Date) => void;
  currentDate: Date;
}

const SchedulerAirmanHeader = ({
  handlePublish,
  handleDayChange,
  currentDate
}: Props) => {
  return (
    <div>
      <Paper>
        <Grid
          style={{
            minHeight: "50px",
            paddingLeft: "4px",
            paddingRight: "10px"
          }}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <HeaderLeft
            currentDate={currentDate}
            handleDayChange={handleDayChange}
          />
          <HeaderCenter currentDate={currentDate} />
          <HeaderRight handlePublish={handlePublish} />
        </Grid>
      </Paper>
    </div>
  );
};

export default SchedulerAirmanHeader;
