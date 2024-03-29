import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100svh;
  width: 100vw;
  position: relative;
`;

export const LogoWrapper = styled.div`
  height: 40vh;
  position: absolute;

  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 1000;

  @media (max-width: 576px) {
    height: 33vh;
  }
`;

export const FrontWrapper = styled.div`
  height: 40vh;
  position: absolute;
  top: 0;
  z-index: 1000;
  width: 0%;
  overflow: hidden;

  animation: slideOpen 3.7s linear;
  animation-delay: 0.3s;

  @keyframes slideOpen {
    0%,
    10% {
      width: 0%;
    }
    25% {
      width: 8%;
    }
    65% {
      width: 92%;
    }
    75%,
    100% {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    height: 33vh;
  }
`;

export const Placeholder = styled.img`
  height: 40vh;
  opacity: 0;

  @media (max-width: 576px) {
    height: 33vh;
  }
`;

export const FrontLogo = styled(motion.img)`
  height: 40vh;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  animation: fadeFull 3.7s linear;
  animation-delay: 0.3s;

  @keyframes fadeFull {
    0%,
    100% {
      opacity: 0;
    }
    20%,
    90% {
      opacity: 1;
    }
  }
  @media (max-width: 576px) {
    height: 33vh;
  }
`;
export const BackLogo = styled(FrontLogo)`
  animation: fade 3.6s linear;
  animation-delay: 0.3s;
  @keyframes fade {
    0%,
    100% {
      opacity: 0;
    }
    20%,
    90% {
      opacity: 0.3;
    }
  }
`;

export const BottomLogo = styled(FrontLogo)`
  animation: fadeFull 3.7s linear;
  animation-delay: 0.3s;
`;
