import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://www.github.com/gustmrg.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo Miranda</strong>
              <time
                title="02 de Agosto de 2023 às 21h23"
                dateTime="2023-08-02 21:23:47"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Apagar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Curtir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
