import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalDesignStyles = createGlobalStyle`
  body {
    color: ${theme.colors.text};
    background-color: ${theme.colors.surface};
  }

  @media (max-width: ${theme.breakpoints.desktop}px) {
    html {
      font-size: 14px;
    }
  }
`;

export const SectionCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: ${theme.sizes.sectionHeight};
  gap: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.md};
  overflow: hidden;
  padding: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
    height: auto;
    gap: 0;
    padding: ${theme.spacing.sm};
  }
`;

export const OverlayLayer = styled.div`
  position: absolute;
  inset: 0;
  background: ${theme.colors.overlay};
  pointer-events: none;
  border-radius: ${theme.radii.md};
`;

export const PrimaryButton = styled.button`
  color: ${theme.colors.textOnDark};
  background-color: ${theme.colors.buttonPrimary};
  border: 1px solid ${theme.colors.borderStrong};
  border-radius: ${theme.radii.sm};
  padding: 0.75em 1.5em;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.buttonPrimaryHover};
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    width: 100%;
  }
`;

export const ModalOverlay = styled.div`
  z-index: 1000;
  background: ${theme.colors.overlay};
  justify-content: center;
  align-items: center;
  display: flex;
  position: fixed;
  inset: 0;
`;

export const ModalContent = styled.div`
  background: ${theme.colors.surface};
  border-radius: ${theme.radii.md};
  max-width: ${theme.sizes.modalMaxWidth};
  max-height: ${theme.sizes.modalMaxHeight};
  padding: ${theme.spacing.md};
  position: relative;
  overflow: auto;
  box-shadow: ${theme.shadows.modal};
`;
