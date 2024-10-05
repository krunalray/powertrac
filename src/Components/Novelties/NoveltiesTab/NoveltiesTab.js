import React,{useState} from "react";
import "./novelties-tab.scss";
import { Row, Col, Image, Container, Card } from "react-bootstrap";
// import Tabs from "react-bootstrap/Tabs";
// import Tab from "react-bootstrap/Tab";
// import TabContainer from "react-bootstrap/TabContainer";
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Select from "react-select";
import Dotsimg from "../../../assets/images/dots01.png";
import Pizzaicon from "../../../assets/images/web-icon/Home-Page/pizza.svg";
import BurgerIcon from "../../../assets/images/web-icon/Home-Page/burger.svg";
import NoveltiesContent from "../NoveltiesContent/NoveltiesContent";

const NoveltiesTab = () => {
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
  const NoveltiesOption = [{ label: "jull", value: "jull" }];
  return (
    <div className="novelties-content-wrapper">
      <div className="right-wrapper container">
        <div className="right-inner-content">
          <div className="tab-content">
          <div className="custom-tab">
              {/* <Tabs defaultActiveKey="vapeproducts" id="uncontrolled-tab-example" >
                <Tab eventKey="vapeproducts" title="vape products" className="main-tabs">
                  <TabContainer>
                    <NoveltiesContent />
                  </TabContainer>
                </Tab>
                <Tab eventKey="cellAccessories" title="Cell Accessories">
                  <TabContainer>
                  A Bloody Mary is a cocktail containing vodka, tomato
                      juice, and other spices and flavorings including
                      Worcestershire sauce, hot sauces, garlic, herbs,
                      horseradish, celery, olives, salt, black pepper, lemon
                      juice, lime juice and celery salt. Some versions of the
                      drink, such as the “surf ’n turf” Bloody Mary, include
                      shrimp and bacon as garnishes. In the United States, it is
                      usually consumed in the morning or early afternoon, and is
                      popular as a hangover cure.
                  </TabContainer>
                </Tab>
                <Tab
                  eventKey="kratom"
                  title="Kratom"
                >
                  <TabContainer>
                  A Bloody Mary is a cocktail containing vodka, tomato
                      juice, and other spices and flavorings including
                      Worcestershire sauce, hot sauces, garlic, herbs,
                      horseradish, celery, olives, salt, black pepper, lemon
                      juice, lime juice and celery salt. Some versions of the
                      drink, such as the “surf ’n turf” Bloody Mary, include
                      shrimp and bacon as garnishes. In the United States, it is
                      usually consumed in the morning or early afternoon, and is
                      popular as a hangover cure.
                  </TabContainer>
                </Tab>
                <Tab eventKey="fishingProducts" title="Fishing Products">
                  <TabContainer>
                  A Bloody Mary is a cocktail containing vodka, tomato
                      juice, and other spices and flavorings including
                      Worcestershire sauce, hot sauces, garlic, herbs,
                      horseradish, celery, olives, salt, black pepper, lemon
                      juice, lime juice and celery salt. Some versions of the
                      drink, such as the “surf ’n turf” Bloody Mary, include
                      shrimp and bacon as garnishes. In the United States, it is
                      usually consumed in the morning or early afternoon, and is
                      popular as a hangover cure.
                  </TabContainer>
                </Tab>
                <Tab eventKey="tourches" title="Tourches">
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
                  eventKey="health&medicine"
                  title="Health & Medicine"
                >
                  <TabContainer>
                  A Bloody Mary is a cocktail containing vodka, tomato
                      juice, and other spices and flavorings including
                      Worcestershire sauce, hot sauces, garlic, herbs,
                      horseradish, celery, olives, salt, black pepper, lemon
                      juice, lime juice and celery salt. Some versions of the
                      drink, such as the “surf ’n turf” Bloody Mary, include
                      shrimp and bacon as garnishes. In the United States, it is
                      usually consumed in the morning or early afternoon, and is
                      popular as a hangover cure.
                  </TabContainer>
                </Tab>
                <Tab eventKey="others" title="Others">
                  <TabContainer>
                  A Bloody Mary is a cocktail containing vodka, tomato
                      juice, and other spices and flavorings including
                      Worcestershire sauce, hot sauces, garlic, herbs,
                      horseradish, celery, olives, salt, black pepper, lemon
                      juice, lime juice and celery salt. Some versions of the
                      drink, such as the “surf ’n turf” Bloody Mary, include
                      shrimp and bacon as garnishes. In the United States, it is
                      usually consumed in the morning or early afternoon, and is
                      popular as a hangover cure.
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
                  <Tab label="vape products" {...a11yProps(0)} />
                  <Tab label="Cell Accessories" {...a11yProps(1)} />
                  <Tab label="Kratom" {...a11yProps(2)} />
                  <Tab label="Fishing Products" {...a11yProps(3)} />
                  <Tab label="Tourches" {...a11yProps(4)} />
                  <Tab label="Health & Medicine" {...a11yProps(5)} />
                  <Tab label="Others" {...a11yProps(6)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <NoveltiesContent />
              </TabPanel>
              <TabPanel value={value} index={1}>
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
              <TabPanel value={value} index={2}>
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
              <TabPanel value={value} index={3}>
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
              <TabPanel value={value} index={6}>
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
            </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default NoveltiesTab;
