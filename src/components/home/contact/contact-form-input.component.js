import React, { useState } from "react";
import { Input, InputGroup } from "./contact-form.styles";
import { Trans } from "gatsby-plugin-react-i18next";

const ContactFormInput = ({ content, handleChange, fields, sent }) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => setFocused(true);
  return (
    <InputGroup>
      <Input
        key={content.id}
        type={content.type}
        placeholder={content.placeHolder}
        required={content.name.toLowerCase() === "how" ? false : true}
        onChange={handleChange}
        name={content.name.toLowerCase()}
        value={fields[content.name.toLowerCase()]}
        onBlur={handleFocus}
        className={focused && !sent && "focused"}
        pattern={
          content.type === "email" &&
          "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[A-Za-z]{2,9}"
        }
      />
      {content.type !== "email" && (
        <span>
          <Trans>fieldRequired</Trans>
        </span>
      )}
      {content.type === "email" && (
        <span>
          <Trans>validEmail</Trans>
        </span>
      )}
    </InputGroup>
  );
};

export default ContactFormInput;
