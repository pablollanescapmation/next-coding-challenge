import ModalLauncher from "@/components/ModalLauncher";
import Header from "@/components/Header";
import LandscapeSection from "@/components/LanscapeSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header title="Next.js Coding Challenge" description="Coding challenge intended to evaluate next and react skills for frontend position" />
        <LandscapeSection
          left={
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam alias soluta necessitatibus maiores, tempora sequi repellat, quaerat ut explicabo fugiat ratione? Eos quod accusantium consequuntur sapiente tempora quasi modi nisi ab hic inventore possimus corporis quia repudiandae officia iusto quis rerum eveniet nesciunt, deleniti ad at? Tenetur ab dolore esse.</p>
          }
          right={
            <>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quo excepturi magnam officia sunt maiores aliquid doloremque soluta voluptatem hic! Accusantium, dolor hic quidem odio eius ut voluptates facere repellat perspiciatis est natus necessitatibus, vel qui mollitia nostrum magni quo quaerat ex? Autem eos eum ab veniam deleniti dolorum numquam!</p>
              <ModalLauncher />
            </>
          }
        />
      </main>
    </div>
  );
}
