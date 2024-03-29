import illustration from "./illustration.svg";
import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
const App = () => {
  const [listTransactions, setListTransactions] = useState([]);
  const [page, setPage] = useState(false);
  const [list, setList] = useState(true);
  const handlePage = () => {
    setPage(false);
  };
  const handleHome = () => {
    setPage(true);
  };
  return !page ? (
    <main className="main__home">
      <HomePage handleHome={handleHome} illustration={illustration} />
    </main>
  ) : (
    <div className="container">
      <Header handlePage={handlePage} />
      <main className="main">
        <section className="section__form ">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            setList={setList}
          />
          {!!listTransactions.length && (
            <TotalMoney
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          )}
        </section>
        <section className="section__aside">
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            setList={setList}
            list={list}
          />
        </section>
      </main>
    </div>
  );
};

export default App;
