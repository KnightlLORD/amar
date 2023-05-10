import { useState } from "react";
import contactImg from "../assets/img/contact-img.svg";
const Contact = () => {
  const formInitialDetails = {
    firstname: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormData({
      ...formDetails,
      [category]: value,
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact me" />
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <form>
              <Row>
                <Col sm={6} className="px-1">
                  <imput
                    type="text"
                    value={formDetails.firstname}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstname", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <imput
                    type="text"
                    value={formDetails.lastName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <imput
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <imput
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <input
                    type="textarea"
                    row="6"
                    value={formDetails.message}
                    palceholder="message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
