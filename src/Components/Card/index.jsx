import trash from "../../Assets/Img/trash.png";
const Card = ({ listTransactions, remove, filter, setFilter, categories }) => {
  // if (!listTransactions.length) {
  //   return (
  //     <aside>
  //       <div className="aside-header">
  //         <span>Resumo financeiro</span>
  //         <ul>
  //           <li>
  //             <button className="button-all">Todos</button>
  //           </li>
  //           <li>
  //             <button>Entradas</button>
  //           </li>
  //           <li>
  //             <button>Despesas</button>
  //           </li>
  //         </ul>
  //       </div>

  //       <p>Você ainda não possui nenhum laçamento </p>
  //     </aside>
  //   );
  // } else {
  return (
    <>
      <aside>
        <div>
          <div className="aside-header">
            <span>Resumo financeiro</span>
            <ul>
              <li>
                <button className="button-all" onClick={() => setFilter("")}>
                  Todos
                </button>
              </li>
              {categories.map((category) => (
                <li key={category}>
                  <button onClick={() => setFilter(category)}>
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {listTransactions.length ? (
            <ul className="container-card">
              {listTransactions.map((transaction, index) => (
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
          ) : (
            <div>
              <p>Você ainda não possui nenhum laçamento </p>
            </div>
          )}
        </div>
      </aside>

      {/* <li>
              <button
                className="button-all"
                onClick={() => todos(listTransactions)}
              >
                Todos
              </button>
            </li> */}
      {/* <li>
              <button onClick={entradas}>Entradas</button>
            </li>
            <li>
              <button onClick={saidas}>Despesas</button>
            </li> */}

      {/* <ul className="container-card">
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
      </ul> */}
    </>
  );
};
// };

export default Card;
