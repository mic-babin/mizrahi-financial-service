import React from "react";
import { Input, InputGroup, TextArea } from "./contact-form.styles";
import { Trans } from "gatsby-plugin-react-i18next";

const ContactFormInput = ({ field, handleChange, fields, errors }) => {
  return (
    <InputGroup>
      {field.type !== "textarea" ? (
        <Input
          key={field.id}
          type={field.type}
          placeholder={field.placeHolder}
          required={field.name.toLowerCase() === "how" ? false : true}
          onChange={handleChange}
          name={field.name.toLowerCase()}
          value={fields[field.name.toLowerCase()]}
        />
      ) : (
        <TextArea
          required={true}
          onChange={handleChange}
          name={field.name}
          value={fields[field.name]}
          placeholder={field.placeHolder}
        />
      )}

      {errors[field.name.toLowerCase()] && (
        <span>
          <Trans>{errors[field.name.toLowerCase()]}</Trans>
        </span>
      )}
    </InputGroup>
  );
};

export default ContactFormInput;
