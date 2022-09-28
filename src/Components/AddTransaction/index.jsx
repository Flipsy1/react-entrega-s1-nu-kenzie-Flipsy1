import { useState } from "react";

// { description: "Salário recebido", type: "entrada", value: 2500 },
// { description: "Conta de luz", type: "saída", value: -150 }

const Register = ({ setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("entrada");
  const [value, setValue] = useState("");

  const typeTransaction = ["entrada", "saída"];

  function handleRegister(event) {
    event.preventDefault();

    if (description.length && value.length) {
      setListTransactions((previousTransactions) => [
        ...previousTransactions,
        { description, type, value },
      ]);
      setDescription("");
      //setType("");
      setValue("");
    } else {
      alert("Prencha corretamente os dados do laçamento");
    }
  }

  return (
    <>
      <form className="form-home" onSubmit={handleRegister}>
        <label htmlFor="description">Descrição</label>
        <input
          type="text"
          id="description"
          placeholder="digite aqui sua descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <span>Ex: Compra de roupas</span>
        <div className="container-input">
          <div className="input-value">
            <label htmlFor="value">Valor</label>
            <input
              type="number"
              id="value"
              placeholder="Valor em R$"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </div>
          <div className="input-type">
            <label htmlFor="type">Tipo de valor</label>
            <select
              id="type"
              onClick={(event) => setType(event.target.value)}
              defaultValue={type}
            >
              {typeTransaction.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit">Inserir valor</button>
      </form>
    </>
  );
};

export default Register;
