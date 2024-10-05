import React from "react";
import { Image, Container ,Row ,Col} from "react-bootstrap";
// import LocationImage from "../../../assets/images/web-images/Location-Pop-up/location.svg";
import GasStation from "../../../assets/images/web-icon/Home-Page/gas-station.svg";
import Dots01 from "../../../assets/images/dots01.png";
import DotsBlueOangeImg from "../../../assets/images/dotsblueorange.png";
import Bannerimg01 from "../../../assets/images/banner-folder/bannerimg01.jpg";
import "./map.scss";
const MapComponent = () => {
  return (
    <div className="location-section">
      <div className="location-inner">
        <Container>
          <Row>
            <Col md={12}>
                <div className="location-img">
                  <Image src={Bannerimg01} />
                </div>
                <div className="gas-station">
                      <Image src={GasStation} />
                      <div className="dots-right">
                        <Image src={Dots01} />
                      </div>
                    </div>
                    <div className="dots-bottom">
                      <Image src={DotsBlueOangeImg} />
                    </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MapComponent;
