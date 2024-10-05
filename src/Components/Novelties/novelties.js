import React from "react";
import BannerSliderNovelties from "./BannerSliderNovelties/BannerSliderNovelties";
import NoveltiesContent from "./NoveltiesContent/NoveltiesContent";
import NoveltiesTab from "./NoveltiesTab/NoveltiesTab";
const Novelties = () => {
  return (
    <div>
      <BannerSliderNovelties />
      <NoveltiesTab />
      {/* <NoveltiesContent /> */}
    </div>
  );
};

export default Novelties;
