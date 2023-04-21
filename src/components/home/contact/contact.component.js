import React from "react";
import { Wrapper, H2, H3, Address } from "./contact.styles";
import LinkedInSrc from "../../../assets/images/icons/LinkedIn-Black.svg";
import ContactForm from "./contact-form.component";
import { motion } from "framer-motion";
import { Trans } from "react-i18next";

const Contact = ({ contactData }) => {
  const { title, address, contact, contactForm } = contactData;
  const tel = contact.filter((c) => c.type === "tel")[0];
  const email = contact.filter((c) => c.type === "email")[0];
  const linkedIn = contact.filter((c) => c.type === "href")[0];

  return (
    <>
      <div className="scroll-to" id="contact"></div>
      <Wrapper id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ps-3 ps-lg-0 pb-5 pb-lg-0 mb-5 mb-lg-0">
              {title && (
                <H2
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.2,
                    type: "linear",
                  }}
                  viewport={{ once: true }}
                >
                  {title}
                </H2>
              )}
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.3,
                  type: "linear",
                }}
                viewport={{ once: true }}
              >
                <H3>
                  <Trans>address</Trans>
                </H3>
                {address &&
                  address
                    .split(",")
                    .map((a, index) => <Address key={index}>{a}</Address>)}
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.4,
                  type: "linear",
                }}
                viewport={{ once: true }}
              >
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
                <Address
                  as="a"
                  href={linkedIn.url}
                  target="_blank"
                  rel="noreferrer "
                  className="pointer"
                >
                  <img src={LinkedInSrc} alt="LinkedIn Logo" />
                </Address>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <ContactForm contactForm={contactForm} />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;
