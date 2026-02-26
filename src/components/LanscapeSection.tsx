import { ReactNode } from "react";
import styles from "../app/page.module.css";

type Props = {
    left: ReactNode;
    right: ReactNode;
};

export default function LandscapeSection({ left, right }: Props) {
    return (
        <section className={styles.landscapeSection}>
            <div className={styles.column}>{left}</div>
            <div className={styles.column}>{right}</div>
        </section>
    );
}