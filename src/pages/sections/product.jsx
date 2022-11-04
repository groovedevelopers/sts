import React, { useEffect } from "react";
import "../../assets/css/style.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Col, Container, Row } from "react-bootstrap";
import prod1 from "../../assets/images/prod1.webp";
import prod2 from "../../assets/images/prod2.jpeg";
import prod3 from "../../assets/images/prod3.jpeg";
import prod4 from "../../assets/images/prod4.jpeg";

const Product = () => {
  return (
    <section className="product">
      <div className="section_title">Our Scents</div>
      <Container className="card_col" fluid>
        <Row>
          <Col sm="3" md="3">
            <Card className="product_card">
              <CardMedia
                component="img"
                height="140"
                image={prod1}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className="product_title"
                  component="div"
                >
                  Caked Up Candle
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="product_desc"
                >
                  Fragnance, Inscence, Packaging
                </Typography>
                <Typography className="product_price">$45.00</Typography>
                <Button variant="outlined">ADD TO CART</Button>
              </CardContent>
            </Card>
          </Col>

          <Col sm="3" md="3">
            <Card className="product_card">
              <CardMedia
                component="img"
                height="140"
                image={prod2}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className="product_title"
                  component="div"
                >
                  Caked Up Candle
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="product_desc"
                >
                  Fragnance, Inscence, Packaging
                </Typography>
                <Typography className="product_price">$45.00</Typography>
                <Button variant="outlined">ADD TO CART</Button>
              </CardContent>
            </Card>
          </Col>

          <Col sm="3" md="3">
            <Card className="product_card">
              <CardMedia
                component="img"
                height="140"
                image={prod3}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className="product_title"
                  component="div"
                >
                  Caked Up Candle
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="product_desc"
                >
                  Fragnance, Inscence, Packaging
                </Typography>
                <Typography className="product_price">$45.00</Typography>
                <Button variant="outlined">ADD TO CART</Button>
              </CardContent>
            </Card>
          </Col>

          <Col sm="3" md="3">
            <Card className="product_card">
              <CardMedia
                component="img"
                height="140"
                image={prod4}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className="product_title"
                  component="div"
                >
                  Caked Up Candle
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="product_desc"
                >
                  Fragnance, Inscence, Packaging
                </Typography>
                <Typography className="product_price">$45.00</Typography>
                <Button variant="outlined">ADD TO CART</Button>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Product;
