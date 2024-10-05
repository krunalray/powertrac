import React,{useState} from "react";
import "./content-wrapper-home2.scss";
import { Image } from "react-bootstrap";
// import Tabs from "react-bootstrap/Tabs";
// import Tab from "react-bootstrap/Tab";
// import TabContainer from "react-bootstrap/TabContainer";
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Dotsimg from "../../../../assets/images/dots01.png";
import Pizzaicon from "../../../../assets/images/web-icon/Home-Page/pizza.svg";
import BurgerIcon from "../../../../assets/images/web-icon/Home-Page/burger.svg";
import BreakFastTab from "../BreakfastTab/breakFastTab";
import BurgerTab from "../BurgerTab/burgerTab";
import HotDogTab from "../HotDogTab/hotDogTab";
import SandwichTab from "../Sandwiches/sandwiches";
import MiscellaneousTab from "../Miscellaneous/miscellaneous";
import ChickenTab from "../ChickenTab/chickenTab";
import DrinkTab from "../DrinkTab/DrinkTab";

const MainContentWrapper = () => {
  const [value, setValue] = useState(0);
  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return(
      <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="storehome2-content-wrapper">
      <div className="right-wrapper">
        <div className="right-inner-content">
          <div className="tab-content">
            <div className="custom-tab">
              {/* <Tabs defaultActiveKey="breakfast" id="uncontrolled-tab-example">
                <Tab eventKey="breakfast" title="Breakfast">
                  <TabContainer>
                    <BreakFastTab />
                  </TabContainer>
                </Tab>
                <Tab eventKey="burger" title="Burger">
                  <TabContainer>
                    <BurgerTab />
                  </TabContainer>
                </Tab>
                <Tab
                  eventKey="hotDogs&SausageDogs"
                  title="hotDogs & SausageDogs "
                >
                  <TabContainer>
                    <HotDogTab />
                  </TabContainer>
                </Tab>
                <Tab eventKey="sandwiches" title="Sandwiches">
                  <TabContainer>
                      <SandwichTab />
                  </TabContainer>
                </Tab>
                <Tab eventKey="huntbrotherspizza" title="Hunt Brothers Pizza">
                  <TabContainer>
                    <p>
                      A Bloody Mary is a cocktail containing vodka, tomato
                      juice, and other spices and flavorings including
                      Worcestershire sauce, hot sauces, garlic, herbs,
                      horseradish, celery, olives, salt, black pepper, lemon
                      juice, lime juice and celery salt. Some versions of the
                      drink, such as the “surf ’n turf” Bloody Mary, include
                      shrimp and bacon as garnishes. In the United States, it is
                      usually consumed in the morning or early afternoon, and is
                      popular as a hangover cure.
                    </p>
                  </TabContainer>
                </Tab>
                <Tab
                  eventKey="krispykrunchychicken"
                  title="Krispy Krunchy Chicken"
                >
                  <TabContainer>
                    <ChickenTab />
                  </TabContainer>
                </Tab>
                <Tab eventKey="miscellaneous" title="Miscellaneous">
                  <TabContainer>
                    <MiscellaneousTab />
                  </TabContainer>
                </Tab>
                <Tab eventKey="drinks" title="Drinks">
                  <TabContainer>
                    <DrinkTab />
                  </TabContainer>
                </Tab>
              </Tabs> */}
              <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="Breakfast" {...a11yProps(0)} />
                  <Tab label="Burger" {...a11yProps(1)} />
                  <Tab label="hotDogs & SausageDogs" {...a11yProps(2)} />
                  <Tab label="Sandwiches" {...a11yProps(3)} />
                  <Tab label="Hunt Brothers Pizza" {...a11yProps(4)} />
                  <Tab label="Krispy Krunchy Chicken" {...a11yProps(5)} />
                  <Tab label="Miscellaneous" {...a11yProps(6)} />
                  <Tab label="Drinks" {...a11yProps(7)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <BreakFastTab />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <BurgerTab />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <HotDogTab />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <SandwichTab />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <p>
                  A Bloody Mary is a cocktail containing vodka, tomato
                  juice, and other spices and flavorings including
                  Worcestershire sauce, hot sauces, garlic, herbs,
                  horseradish, celery, olives, salt, black pepper, lemon
                  juice, lime juice and celery salt. Some versions of the
                  drink, such as the “surf ’n turf” Bloody Mary, include
                  shrimp and bacon as garnishes. In the United States, it is
                  usually consumed in the morning or early afternoon, and is
                  popular as a hangover cure.    
                </p>
              </TabPanel>
              <TabPanel value={value} index={5}>
                <ChickenTab />
              </TabPanel>
              <TabPanel value={value} index={6}>
                <MiscellaneousTab />
              </TabPanel>
              <TabPanel value={value} index={7}>
                <DrinkTab />
              </TabPanel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentWrapper;
