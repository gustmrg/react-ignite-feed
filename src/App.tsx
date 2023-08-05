import { Header } from "./components/Header";
import { Post, PostProps } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      name: "Gustavo Miranda",
      role: "SWE @Microsoft",
      avatarUrl: "https://www.github.com/gustmrg.png",
    },
    content: [
      { type: "paragraph", content: "E aí, pessoal" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "meuportifa/doctorcare" },
    ],
    publishedAt: new Date("2023-08-04 20:00:00"),
  },
  {
    id: 2,
    author: {
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
      avatarUrl: "https://www.github.com/diego3g.png",
    },
    content: [
      { type: "paragraph", content: "Fala devssss 👋" },
      {
        type: "paragraph",
        content:
          "Saiu mais uma aula do módulo do Ignite do forno que tá muito demais!",
      },
      {
        type: "paragraph",
        content:
          "Cola lá no site da Rocketseat na trilha de ReactJS e vem aprender essa stack comigo",
      },
    ],
    publishedAt: new Date("2023-08-04 11:39:33"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
