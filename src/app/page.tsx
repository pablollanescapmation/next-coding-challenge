import ModalLauncher from "../components/ModalLauncher";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header>
          <h1>Next.js Coding Challenge</h1>
          <p>Coding challenge intended to evaluate next and react skills for frontend position</p>
        </header>
        <section className={styles.landscapeSection}>
          <div className={styles.column}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam alias soluta necessitatibus maiores, tempora sequi repellat, quaerat ut explicabo fugiat ratione? Eos quod accusantium consequuntur sapiente tempora quasi modi nisi ab hic inventore possimus corporis quia repudiandae officia iusto quis rerum eveniet nesciunt, deleniti ad at? Tenetur ab dolore esse.</p>
          </div>
          <div className={styles.column}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quo excepturi magnam officia sunt maiores aliquid doloremque soluta voluptatem hic! Accusantium, dolor hic quidem odio eius ut voluptates facere repellat perspiciatis est natus necessitatibus, vel qui mollitia nostrum magni quo quaerat ex? Autem eos eum ab veniam deleniti dolorum numquam!</p>
            <ModalLauncher />
          </div>
        </section>
      </main>
    </div>
  );
}
