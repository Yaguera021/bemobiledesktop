import Header from "../components/Header";
import Table from "../components/Table";

import "./styles/Home.scss";

export default function Home() {
  return (
    <div className='home-wrapper-content'>
      <Header />
      <section>
        <Table />
      </section>
    </div>
  );
}
