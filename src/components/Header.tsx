import styled from "styled-components";
import { theme } from "@/design-system/theme";

type Props = {
    title: string;
    description?: string;
};

const HeaderRoot = styled.header`
  display: flex;
  flex-direction: column;
        gap: ${theme.spacing.xs};
        padding: ${theme.spacing.lg} ${theme.spacing.sm};

    h1 {
        margin-bottom: 0;
    }

    p {
        margin-bottom: 0;
    }
`;

export default function Header({ title, description }: Props) {
    return (
        <HeaderRoot>
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </HeaderRoot>
    );
}