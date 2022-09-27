import { useState } from "react";
import trash from "../../Assets/Img/trash.png";
const Card = ({ listTransactions, remove }) => {
  console.log(listTransactions);

  const [aux, setAux] = useState(listTransactions);

  function todos() {
    setAux(listTransactions);
  }

  function entradas() {
    const enter = listTransactions.filter(
      (listTransactions) => listTransactions.type === "entrada"
    );
    setAux(enter);
  }

  function saidas() {
    const ex = listTransactions.filter(
      (listTransactions) => listTransactions.type === "saída"
    );
    setAux(ex);
  }

  if (!listTransactions.length) {
    return (
      <aside>
        <div className="aside-header">
          <span>Resumo financeiro</span>
          <ul>
            <li>
              <button className="button-all">Todos</button>
            </li>
            <li>
              <button>Entradas</button>
            </li>
            <li>
              <button>Despesas</button>
            </li>
          </ul>
        </div>

        <p>Você ainda não possui nenhum laçamento </p>
      </aside>
    );
  } else {
    return (
      <aside>
        <div className="aside-header">
          <span>Resumo financeiro</span>
          <ul>
            <li>
              <button className="button-all" onClick={todos}>
                Todos
              </button>
            </li>
            <li>
              <button onClick={entradas}>Entradas</button>
            </li>
            <li>
              <button onClick={saidas}>Despesas</button>
            </li>
          </ul>
        </div>

        <ul className="container-card">
          {aux.map((transaction, index) => (
            <li key={index}>
              <div className="type-continer">
                <div className={transaction.type}></div>
                <div className="description">
                  <p>{transaction.description}</p>
                  <span>{transaction.type}</span>
                </div>
              </div>
              <div className="value-remove">
                <span>R$ {transaction.value}</span>
                <button onClick={() => remove(transaction.description)}>
                  <img src={trash} alt="lixeira" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
};

export default Card;
