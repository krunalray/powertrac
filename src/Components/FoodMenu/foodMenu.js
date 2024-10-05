import React from "react";
import BannerSlider from "./BannerSliderFoodmenu/bannerSlider";
import ContentWrapper from "./ContentWrapper/contentWrapper";
const FoodMenu = () => {
  return (
    <div className="main-content-section">
      <div className="main-inner-content">
        <BannerSlider />
        <ContentWrapper />
      </div>
    </div>
  );
};

export default FoodMenu;
