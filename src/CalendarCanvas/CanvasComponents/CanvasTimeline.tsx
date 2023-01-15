import { Fragment } from "react";

const CanvasTimeline = () => {
  const getTimes = Array.from({ length: 24 }, (_, index) => {
    return {
      time: String(index * 100).padStart(4, "0"),
      option: index > 12 ? "PM" : "AM"
    };
  });

  return (
    <div style={{ overflowX: "scroll", whiteSpace: "nowrap" }}>
      <div
        style={{
          float: "left",
          position: "absolute",
          width: "210px",
          background: "gray",
          height: "calc(100vh - 148px)"
        }}
      >
        Container
      </div>
      {getTimes.map((x: any, index: number) => (
        <Fragment>
          <div
            style={{
              display: "inline-block",
              border: "black 1px solid",
              height: "calc(100vh - 150px)",
              marginLeft: index === 0 ? "210px" : "0",
              padding: "0px 10px"
            }}
          >
            {x.time}
          </div>
          <div
            style={{
              display: "inline-block",
              border: "black 1px solid",
              height: "calc(100vh - 150px)",
              padding: "0px 10px"
            }}
          >
            {x.time.slice(0, 2) + "30"}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default CanvasTimeline;
