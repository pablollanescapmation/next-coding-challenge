import styles from "../app/page.module.css";

type Props = {
    title: string;
    description?: string;
};

export default function Header({ title, description }: Props) {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </header>
    );
}