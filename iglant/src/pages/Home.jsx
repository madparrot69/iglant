import Header from "../components/header/Header";
import Section2 from "../components/home/author-recomend/Section2";
import Section1 from "../components/home/bot-recomend/Section1";
import "../styles/main.scss";

export default function Home() {
  return (
    <body>
      <Header />
      <main>
        <h1>welcome to iglant - your personal au.</h1>

        <p>
          I need to add some description, but I haven't come up with anything
          yet. While I'm thinking, go check out the website, have a nice day.
        </p>

        <Section1 />
        <Section2 />
      </main>
    </body>
  );
}
