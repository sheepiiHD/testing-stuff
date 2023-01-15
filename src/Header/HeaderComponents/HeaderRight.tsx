import { Grid, Button } from "@mui/material";

const HeaderRight = ({ handlePublish }: any) => {
  return (
    <Grid item sx={{ minWidth: { xs: "100%", sm: "100px" } }}>
      <Button
        style={{ marginLeft: "0" }}
        size="small"
        variant="contained"
        onClick={handlePublish}
        fullWidth
        sx={{ display: { xs: "inherit", sm: "none" } }}
      >
        Publish
      </Button>
      <Button
        style={{ marginLeft: "50px" }}
        size="small"
        variant="contained"
        onClick={handlePublish}
        sx={{ display: { xs: "none", sm: "inherit" } }}
      >
        Publish Schedule
      </Button>
    </Grid>
  );
};

export default HeaderRight;
