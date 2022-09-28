import "./Css/Reset.css";
import "./Css/Login.css";
import "./Css/Homepage.css";
import "./Css/Aside.css";
import { useState } from "react";
import Register from "./Components/AddTransaction";
import Card from "./Components/Card";
import Saldo from "./Components/Saldo";
import nuKenzie from "./Assets/Img/NuKenzie.png";
import nuKenzie2 from "./Assets/Img/NuKenzie2.png";
import illustration from "./Assets/Img/illustration.png";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [listTransactions, setListTransactions] = useState([]);

  const [filter, setFilter] = useState("");

  const total = listTransactions.map((transaction) =>
    transaction.type === "saída" ? -transaction.value : transaction.value
  );

  const newList = listTransactions.filter((transaction) =>
    filter === "" ? true : transaction.type === filter
  );

  const categories = ["entrada", "saída"];

  function Login() {
    setIsLoggedIn(true);
  }

  function Logout() {
    setIsLoggedIn(false);
  }

  function removeTransaction(remove) {
    const newListTransaction = listTransactions.filter(
      (trans) => trans.description !== remove
    );
    setListTransactions(newListTransaction);
  }

  if (!isLoggedIn) {
    return (
      <>
        <main className="login">
          <div className="init">
            <img src={nuKenzie2} alt="Logo" />
            <p>Centralize o controle das suas finanças</p>
            <span>de forma rápida e segura</span>
            <button onClick={Login}>Iniciar</button>
          </div>
          <div className="login-img-container">
            <img src={illustration} alt="background" />
          </div>
        </main>
      </>
    );
  } else {
    return (
      <>
        <div className="container-body">
          <header className="header-home">
            <img src={nuKenzie} alt="Logo" />
            <button onClick={Logout}>Inicio</button>
          </header>
          <div className="container-home">
            <main>
              <Register setListTransactions={setListTransactions} />

              <Saldo listTransactions={total} />
            </main>

            <Card
              listTransactions={newList}
              remove={removeTransaction}
              filter={filter}
              setFilter={setFilter}
              categories={categories}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
