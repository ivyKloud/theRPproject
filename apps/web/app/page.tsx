import { Card } from "@repo/ui/card";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>

      <Button appName="web" className={styles.button}>
        Click me!
      </Button>


      <div className={styles.grid}>
        {[].map(({ title, href, description }) => (
          <Card className={styles.card} href={href} key={title} title={title}>
            {description}
          </Card>
        ))}
      </div>
    </main>
  );
}
