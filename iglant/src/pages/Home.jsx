import Header from "../components/header/Header";
import Section3 from "../components/home/author-recomend/Section3";
import Section2 from "../components/home/bot-recomend/Section2";
import Section1 from "../components/home/intro/Section1";

import "../styles/main.scss";

export default function Home() {
  return (
    <body>
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
    </body>
  );
}
