import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

/**
 * The Footer component is a function that returns a footer with a background color of #1C2331, a class
 * of font-small pt-4 mt-4, and a container with a class of text-center text-md-left. The container has
 * a row with two columns. The first column has a class of md-6 and contains a h5 with a class of title
 * and a style of color:#ffffff. The h5 contains the text "Footer Content". The p tag has a style of
 * color:#ffffff and contains the text "Here you can use rows and columns here to organize your footer
 * content." The second column has a class of md-6 and contains a h5 with a class of title and the text
 * "Links". The ul tag contains four li tags with a class of list-unstyled. Each li tag contains an a
 * tag with an href of #! and the text "Link 1",
 * @returns A React component.
 */
const Footer = () => {
  return (
    <MDBFooter style={{background:"#1C2331"}}  className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title" style={{color:"#ffffff "}} >Footer Content</h5>
            <p style={{color:"#ffffff "}} >
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;