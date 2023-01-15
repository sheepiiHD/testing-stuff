import { Paper } from "@mui/material";

interface Groups {
  title: string;
  type: string;
  personnel: PersonnelBlock[];
}

interface PersonnelBlock {
  rank: string;
  name: string;
  priority: string;
  position: string;
  timeline: Event[];
}

// We can extend event over and over again as we get different mission stuff
interface Event {
  title: string;
  location: string;
}

interface FlightEvent extends Omit<Event, "location"> {
  start: Date;
  end: Date;
  takeOff: Date;
  landing: Date;
}

interface Briefing extends Event {
  additionalData?: any;
}

interface Plane {
  tail: string;
}

interface Props {
  schedules: Groups[];
}

const StaticLeftOptions = ({ schedules }: Props) => {
  return <Paper></Paper>;
};

export default StaticLeftOptions;
