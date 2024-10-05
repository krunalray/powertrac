import React from "react";
import BannerSlider from "./BannerSlider/bannerSlider";
import MainContentWrapper from "./MainContentWrapper/mainContentWrapper";
const HomeComponent = () => {
  return (
    <div className="main-content-section">
      <div className="main-inner-content">
        <BannerSlider />
        <MainContentWrapper />
      </div>
    </div>
  );
};

export default HomeComponent;
