// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../App';
// import TextModal from '../components/TextModal';
// import { getUserStore, putUserStore } from '../helpers';
// import { v4 as uuidv4 } from 'uuid';
// import PresentationCard from '../components/PresentationCard';
// import Container from '@mui/material/Container';
// import { CssBaseline, Fab } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
import { Scheduler } from "@aldabil/react-scheduler";
import RoomTimetable from "../components/RoomTimetable";
import { Box, Button, MenuItem, Select } from "@mui/material";
import { useState } from "react";
export const RESOURCES = [
  {
    admin_id: 1,
    title: "Room 1",
    avatar: "https://picsum.photos/200/300",
    color: "#ab2d2d"
  },
  {
    admin_id: 2,
    title: "Room 2",
    avatar: "https://picsum.photos/200/300",
    color: "#58ab2d"
  },
  {
    admin_id: 3,
    title: "Room 3",
    avatar: "https://picsum.photos/200/300",
    color: "#a001a2"
  },
  {
    admin_id: 4,
    title: "Room 4",
    avatar: "https://picsum.photos/200/300",
    color: "#08c5bd"
  }
];

export const EVENTS =  [
  {
    event_id: 1,
    title: "Event 1",
    start: new Date(new Date(new Date().setHours(9)).setMinutes(30)),
    end: new Date(new Date(new Date().setHours(10)).setMinutes(30)),
    admin_id: 1
  },
  {
    event_id: 2,
    title: "Event 2",
    start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
    admin_id: 2
  },
  // {
  //   event_id: 3,
  //   title: "Event 3",
  //   start: new Date(
  //     new Date(new Date(new Date().setHours(9)).setMinutes(0)).setDate(
  //       new Date().getDate() - 1
  //     )
  //   ),
  //   end: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
  //   admin_id: 1
  // },
  {
    event_id: 4,
    title: "Event 4",
    start: new Date(
      new Date(new Date(new Date().setHours(9)).setMinutes(0)).setDate(
        new Date().getDate() - 2
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(10)).setMinutes(0)).setDate(
        new Date().getDate() - 2
      )
    ),
    admin_id: 2
  },
  // {
  //   event_id: 5,
  //   title: "Event 5",
  //   start: new Date(
  //     new Date(new Date(new Date().setHours(10)).setMinutes(0)).setDate(
  //       new Date().getDate() - 2
  //     )
  //   ),
  //   end: new Date(
  //     new Date(new Date(new Date().setHours(11)).setMinutes(0)).setDate(
  //       new Date().getDate() + 10
  //     )
  //   ),
  //   admin_id: 4
  // },
  {
    event_id: 6,
    title: "Event 6",
    start: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
    admin_id: 2
  },
  {
    event_id: 7,
    title: "Event 7",
    start: new Date(
      new Date(new Date(new Date().setHours(11)).setMinutes(0)).setDate(
        new Date().getDate() - 1
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(12)).setMinutes(0)).setDate(
        new Date().getDate() - 1
      )
    ),
    admin_id: 3
  },
  {
    event_id: 8,
    title: "Event 8",
    start: new Date(
      new Date(new Date(new Date().setHours(13)).setMinutes(0)).setDate(
        new Date().getDate() - 1
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(14)).setMinutes(0)).setDate(
        new Date().getDate() - 1
      )
    ),
    admin_id: 4
  },
  {
    event_id: 9,
    title: "Event 11",
    start: new Date(
      new Date(new Date(new Date().setHours(13)).setMinutes(0)).setDate(
        new Date().getDate() + 1
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(15)).setMinutes(30)).setDate(
        new Date().getDate() + 1
      )
    ),
    admin_id: 1
  },
  {
    event_id: 10,
    title: "Event 9",
    start: new Date(
      new Date(new Date(new Date().setHours(15)).setMinutes(0)).setDate(
        new Date().getDate() + 1
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(16)).setMinutes(30)).setDate(
        new Date().getDate() + 1
      )
    ),
    admin_id: 2
  },
  {
    event_id: 11,
    title: "Event 10",
    start: new Date(
      new Date(new Date(new Date().setHours(11)).setMinutes(0)).setDate(
        new Date().getDate() - 1
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(15)).setMinutes(0)).setDate(
        new Date().getDate() - 1
      )
    ),
    admin_id: 1
  }
];


const Dashboard = () => {
  // let 
  let [selectedDate, setSelectedDate] = useState(new Date());
  let [currLevel, setCurrLevel] = useState(1);

  const handleChange = () => {
    console.log('clicked');
  }

  return <>
    <Box sx={{display: 'flex', alignItems: 'center', gap: '25px'}}>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={currLevel}
      label="Level"
      onChange={handleChange}
        >
      <MenuItem value={1}>Level One</MenuItem>
      <MenuItem value={2}>Level Two</MenuItem>
      <MenuItem value={33}>Level Three</MenuItem>
    </Select>
      <Box>
        {`${selectedDate.getDate()}/${selectedDate.getMonth()}/${selectedDate.getFullYear()}`}
      </Box>
      <Button variant="outlined">
        &lt;
      </Button>
      <Button variant="outlined">
        &gt; 
      </Button>

    </Box>
    <RoomTimetable />
  </>
}

export default Dashboard;
