const Saldo = ({ listTransactions }) => {
  return (
    <div className="value-container">
      <div className="amount">
        <h3>Valor total</h3>
        <span>
          {listTransactions.reduce(
            (prev, atual) => parseInt(atual.value) + prev,
            0
          )}
        </span>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};

export default Saldo;
