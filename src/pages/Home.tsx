import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";

import "./styles/Home.scss";

export default function Home() {
  return (
    <div className='home-wrapper-content'>
      <Header />
      <section>
        <div className='top-wrapper'>
          <h4>Funcionários</h4>
          <SearchBar />
        </div>
        <Table />
      </section>
    </div>
  );
}
