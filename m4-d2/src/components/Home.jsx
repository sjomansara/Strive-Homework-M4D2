import React from "react";
import MyJumbotron from "./Welcome";
import LatestReleases from "./LatestReleases";

const Home = () => {
  return (
    <div>
      <MyJumbotron />
      <LatestReleases />
    </div>
  );
}

export default Home;
