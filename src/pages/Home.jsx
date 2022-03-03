import React from "react";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";

import Img1 from "../images/top/img1.jpg";
import Img2 from "../images/top/img2.jpg";
import Img3 from "../images/top/img3.jpg";
import Img4 from "../images/top/img4.jpg";
import Img5 from "../images/top/img5.jpg";
import Img6 from "../images/top/img6.jpg";
import Img7 from "../images/top/img7.jpg";

import { Divider, Grid } from "@mui/material";
import About from "../components/About";
import StoryOfTheday from "../components/StoryOfTheday";
import Reach from "../components/Reach";
import Work from "../components/Work";
import TaskList from "../components/TaskList";
import HappeningsList from "../components/HappeningsList";
import Footer from "../components/Footer";

const topImages = [Img5, Img6, Img7, Img1, Img2, Img3, Img4];
const Home = () => {
  return (
    <div style={{ margin: -7 }}>
      <Header />
      <Divider
        style={{
          background: "green",
          marginTop: 0,
          height: 3,
          marginLeft: 0,
          marginRight: 0,
        }}
      />
      <ImageSlider topImages={topImages} />
      <div id="about" style={{ marginLeft: 50, marginTop: 60 }}>
        <Grid
          spacing={15}
          container
          direction="row"
          justifyContent="space-between"
        >
          <Grid item xs={6}>
            <About />
          </Grid>
          <Grid item xs={6}>
            <StoryOfTheday />
          </Grid>
        </Grid>
        
      </div>
      <div id="reach">
      <Reach />
      </div>
     
      <div id="work" style={{marginTop: 100, marginLeft: 50, marginRight: 50}}>
          <Work/>
        </div>
        <div id="task">
          <TaskList/>
        </div>
        <div id="happenings">
          <HappeningsList/>
        </div>
        <div>
          <Footer/>
        </div>

    </div>
  );
};

export default Home;
