import { ReactNode } from "react";
import Image from "next/image";
import styled from "styled-components";

type Props = {
    left: ReactNode;
    right: ReactNode;
};

const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 300px;
  gap: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  padding: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 0;
    padding: 1rem;
  }
`;

const BackgroundImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  pointer-events: none;
  border-radius: 8px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  z-index: 1;
  color: #fff;
  align-items: center;
  
  p {
    text-align: left;
  }
`;

export default function LandscapeSection({ left, right }: Props) {
    return (
        <SectionWrapper>
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
            <Overlay />
            <Column>{left}</Column>
            <Column>{right}</Column>
        </SectionWrapper>
    );
}