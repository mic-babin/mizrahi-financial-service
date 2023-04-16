import React from "react";
import { ModalCard, ModalButton } from "../../common/modal/modal.styles";
import { Trans } from "gatsby-plugin-react-i18next";

const ContactFormModal = ({ show, handleClose }) => {
  return (
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
  );
};

export default ContactFormModal;
