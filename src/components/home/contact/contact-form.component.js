import React from "react";
import { useState } from "react";
import axios from "axios";
import { Trans } from "gatsby-plugin-react-i18next";
import ArrowSrc from "../../../assets/images/icons/diagonal-arrow.svg";
import {
  Form,
  TextArea,
  FormButton,
  Arrow,
  InputGroup,
} from "./contact-form.styles";
import { ModalCard, ModalButton } from "../../common/modal/modal.styles";
import ContactFormInput from "./contact-form-input.component";

function ContactForm({ contactForm }) {
  const formFields = contactForm;
  const inputs = formFields.filter((field) => field.type !== "textarea");
  const textArea = formFields.filter((field) => field.type === "textarea")[0];
  const defaultFields = {
    name: "",
    email: "",
    how: "",
    textarea: "",
  };
  const [fields, setFields] = useState(defaultFields);
  const [show, setShow] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [focused, setFocused] = useState(false);
  const [sent, setSent] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleFocus = () => setFocused(true);
  const handleSent = () => setSent(true);

  const resetFields = () => {
    setFields(defaultFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/.netlify/functions/email", { fields });
      resetFields();
      handleShow();
      handleSent();
    } catch (error) {
      alert("Une erreur est survenue");
      console.log(error.response.data);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });

    fields["name"] !== "" &&
    /[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[A-Za-z]{2,9}/.test(
      fields["email"]
    ) !== "" &&
    fields["textarea"] !== ""
      ? setValidForm(true)
      : setValidForm(false);
  };

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
        {inputs &&
          inputs.map((content) => (
            <ContactFormInput
              content={content}
              handleChange={handleChange}
              fields={fields}
              sent={sent}
            />
          ))}
        <InputGroup>
          <TextArea
            onBlur={handleFocus}
            className={focused && !sent && "focused"}
            required={true}
            onChange={handleChange}
            name={textArea.name}
            value={fields[textArea.name]}
            placeholder={textArea.placeHolder}
          />
          <span>
            <Trans>fieldRequired</Trans>
          </span>
        </InputGroup>

        <FormButton
          onClick={handleSubmit}
          className="align-self-end"
          disabled={!validForm}
        >
          <Trans>sendEmail</Trans>
          <Arrow src={ArrowSrc} alt="right-arrow" />
        </FormButton>
      </Form>

      <ModalCard show={show} onHide={handleClose} centered>
        <ModalCard.Body>
          <h1 className="text-center">
            <Trans>title</Trans>
          </h1>
          <p className="px-3 text-center pt-2 mb-0">
            <Trans>messageEmail</Trans>
          </p>
          <ModalButton className="pe-3" onClick={handleClose}>
            <Trans>closeEmail</Trans>
          </ModalButton>
        </ModalCard.Body>
      </ModalCard>
    </>
  );
}

export default ContactForm;
