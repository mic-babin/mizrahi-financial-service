import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

export const ModalButton = styled.p`
  cursor: pointer;
  text-align: right;
  font-weight: bold;
  color: #2b2929;
  font-size: 20px;
`;

export const ModalCard = styled(Modal)`
  cursor: default;
  .modal-content {
    background-color: #eeede8;
  }
`;
