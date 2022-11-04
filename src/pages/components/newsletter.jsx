import React, { useEffect } from "react";
import "../../assets/css/footer.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Newsletter = () => {
  return (
    <div className="newsletter">

        <div className="sec_title">
            Join Our Newsletter
        </div>

        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter your e-mail address here"
          aria-label="Enter your e-mail address here"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Join
        </Button>
      </InputGroup>
     
    </div>
  );
};

export default Newsletter;
