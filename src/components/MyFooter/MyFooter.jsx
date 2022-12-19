import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function MyFooter() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="https://www.facebook.com/girlpowertalk/" target=" " className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="https://twitter.com/girlpowertalk" target=" " className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="https://youtu.be/JR9rMZYPkR0" target=" " className="me-4 text-reset">
            <MDBIcon fab icon="youtube" />
          </a>
          <a href="https://www.instagram.com/girlpowertalk/" target=" " className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/company/girl-power-talk' target=" " className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="https://www.tiktok.com/@girlpowertalk?lang=en" target=" " className="me-4 text-reset">
            <MDBIcon fab icon="tiktok" />
          </a>
          
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                <span style={{ color: 'red' }}>Girl Power Talk</span>
              </h6>
              <p>
                “One girl empowers another. Let’s change lives together: 
                one girl, one woman and one human being at a time.”
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
              <p>
                <a href="#!" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Our Leaders 
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Values 
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Events
                </a>
              </p>

              <p>
                <a href="#!" className="text-reset">
                  Merch
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company </h6>
              <p>
                <a href="#!" className="text-reset">
                  Careers
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Submit your Story
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Get Directions
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Privacy Policy
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@<span style={{color:'red'}}>girlpowertalk.com</span>
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          GirlPowerTalk  All Rights Reserved 
        </a>
      </div>
    </MDBFooter>
  );
}
