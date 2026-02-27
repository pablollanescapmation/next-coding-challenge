import { ReactNode } from "react";
import Image from "next/image";
import styled from "styled-components";
import { OverlayLayer, SectionCard } from "@/design-system/primitives";
import { theme } from "@/design-system/theme";

type Props = {
    left: ReactNode;
    right: ReactNode;
};

const BackgroundImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  position: relative;
  z-index: 1;
  color: ${theme.colors.textOnDark};
  align-items: center;
  
  p {
    text-align: left;
  }
`;

export default function LandscapeSection({ left, right }: Props) {
    return (
    <SectionCard>
            <BackgroundImage
                src="/images/landscape.jpeg"
                alt="Scenic landscape background for coding challenge"
                fill
                priority
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    pointerEvents: "none",
                }}
            />
              <OverlayLayer />
            <Column>{left}</Column>
            <Column>{right}</Column>
              </SectionCard>
    );
}