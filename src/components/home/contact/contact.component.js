import { renderRichText } from "gatsby-source-contentful/rich-text";
import React from "react";
import SectionTitle from "../../common/section-title/section-title.component";
import { Wrapper, H2, H3, Address } from "./contact.styles";
import LinkedInSrc from "../../../assets/images/icons/LinkedIn-Black.svg";
import ContactForm from "./contact-form.component";

const Contact = ({ contactData }) => {
  const { title, address, contact, contactForm } = contactData;
  const tel = contact.filter((c) => c.type === "tel")[0];
  const email = contact.filter((c) => c.type === "email")[0];
  const linkedIn = contact.filter((c) => c.type === "href")[0];

  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ps-3 ps-lg-0 pb-5 pb-lg-0 mb-5 mb-lg-0">
            {title && <H2>{title}</H2>}
            <H3>ADRESSE</H3>
            {address &&
              address
                .split(",")
                .map((a, index) => <Address key={index}>{a}</Address>)}
            <H3>CONTACT</H3>
            <Address
              as="a"
              href={`mailTo: ${email.url}`}
              className="pointer text-decoration-underline"
            >
              {email.text}
            </Address>
            <Address as="a" href={`tel: ${tel.url}`} className="pointer">
              {tel.text}
            </Address>
            <Address as="a" href={linkedIn.url} className="pointer">
              <img src={LinkedInSrc} alt="LinkedIn Logo" />
            </Address>
          </div>
          <div className="col-lg-6">
            <ContactForm contactForm={contactForm} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
