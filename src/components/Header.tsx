import styled from "styled-components";

type Props = {
    title: string;
    description?: string;
};

const HeaderRoot = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem 1rem;
`;

export default function Header({ title, description }: Props) {
    return (
        <HeaderRoot>
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </HeaderRoot>
    );
}