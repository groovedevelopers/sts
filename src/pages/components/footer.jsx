import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../../assets/css/footer.css";
import { Link } from "react-router-dom";
import Newsletter from "./newsletter";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <span>Shop The Scents</span>
      </div>

      <Container className="menu_container">
        <Row>
          <Col sm="3" md="3">
            <div className="footer_section">
              <div className="sec_title">CONTACT</div>
              <ul>
                <li>A: Złota 44, Warsaw, PL</li>
                <li>T: +48 567 879 444</li>
                <li>contact@shopthescent.com</li>
              </ul>
            </div>
          </Col>

          <Col sm="3" md="3">
            <div className="footer_section">
              <div className="sec_title">ABOUT</div>
              <ul>
                <li><Link to="">Our Story</Link></li>
                <li><Link to="">Reviews</Link></li>
                <li><Link to="">FAQs</Link></li>
                <li><Link to="">Corporate Gifting</Link></li>
              </ul>
            </div>
          </Col>

          <Col sm="3" md="3">
            <div className="footer_section">
              <div className="sec_title">POLICY</div>
              <ul>
                <li><Link to="">Shipping Policy</Link></li>
                <li><Link to="">Refund Policy</Link></li>
                <li><Link to="">Terms & Conditions</Link></li>
              </ul>
            </div>
          </Col>

          <Col sm="3" md="3">
            <div className="footer_section">
              <div className="sec_title">SOCIALS</div>
              <ul>
                <li><Link to=""><FacebookOutlinedIcon></FacebookOutlinedIcon> Facebook</Link></li>
                <li><Link to=""><TwitterIcon></TwitterIcon> Twitter</Link></li>
                <li><Link to=""><InstagramIcon></InstagramIcon> Instagram</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <Newsletter className="newsletter"></Newsletter>

      <div className="copy_footer">

      <div className="copy">
      © 2021 Shop The Scents, All Rights Reserved. Designed by <a href="mailto:contactgroovedevelopers@gmail.com">Groove Developers</a>
      </div>
      </div>

    </div>
  );
};

export default Footer;
