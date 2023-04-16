import React from "react";
import { useState } from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import ArrowSrc from "../../../assets/images/icons/diagonal-arrow.svg";
import { Form, FormButton, Arrow } from "./contact-form.styles";
import ContactFormInput from "./contact-form-input.component";
import { useForm } from "../../../utils/form.hook";
import { validate } from "../../../utils/form.validators";
import ContactFormModal from "./contact-form-modal.component";

function ContactForm({ contactForm }) {
  const [show, setShow] = useState(false);
  const { handleChange, fields, handleSubmit, errors } = useForm(
    validate,
    setShow
  );

  const handleClose = () => setShow(false);

  return (
    <>
      <Form
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.2,
          type: "linear",
        }}
        viewport={{ once: true }}
      >
        {contactForm &&
          contactForm.map((field) => (
            <ContactFormInput
              key={field.id}
              field={field}
              handleChange={handleChange}
              fields={fields}
              errors={errors}
            />
          ))}
        <FormButton onClick={handleSubmit} className="align-self-end">
          <Trans>sendEmail</Trans>
          <Arrow src={ArrowSrc} alt="right-arrow" />
        </FormButton>
      </Form>
      <ContactFormModal show={show} handleClose={handleClose} />
    </>
  );
}

export default ContactForm;
