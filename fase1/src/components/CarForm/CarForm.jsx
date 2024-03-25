import "./CarForm.module.css";
import { useState } from "react";

function CarForm({ onSubmit }) {
  const [id, setId] = useState(4);
  const [nome, setNome] = useState("");
  const [nomeError, setNomeError] = useState("");
  const [marca, setMarca] = useState("");
  const [marcaError, setMarcaError] = useState("");
  const [cor, setCor] = useState("");
  const [corError, setCorError] = useState("");
  const [ano, setAno] = useState("");
  const [anoError, setAnoError] = useState("");

  function resetaInput() {
    setNome("");
    setMarca("");
    setCor("");
    setAno("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setNomeError("");
    setMarcaError("");
    setCorError("");
    setAnoError("");

    if (nome.length === 0) {
      setNomeError("Nome inválido. O nome deve conter pelo menos um carácter.");
    }
    if (marca.length === 0) {
      setMarcaError(
        "Marca inválida. A marca deve conter pelo menos um carácter."
      );
    }
    if (cor.length === 0) {
      setCorError(
        "Cor inválida. O nome da cor deve conter pelo menos um carácter."
      );
    }
    if (ano.length === 0 || ano < 1900 || ano > 2099) {
      setAnoError("Ano inválido. Por favor, insira um ano entre 1900 e 2099.");
    }

    const car = {
      id: id,
      nome: nome,
      marca: marca,
      cor: cor,
      ano: ano,
    };
    onSubmit(car);
    resetaInput();
    incrementId();
  };

  const incrementId = () => {
    setId((prevId) => prevId + 1);
  };

  return (
    <div id="box">
      <h1>Adicionar Carro</h1>
      <form>
        <label>Nome: </label>
        <input
          type="text"
          name="nome"
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />
        {nomeError && <p className="error">{nomeError}</p>}
        <label>Marca: </label>
        <input
          type="text"
          name="marca"
          value={marca}
          onChange={(e) => {
            setMarca(e.target.value);
          }}
        />
        {marcaError && <p className="error">{marcaError}</p>}
        <label>Cor: </label>
        <input
          type="text"
          name="cor"
          value={cor}
          onChange={(e) => {
            setCor(e.target.value);
          }}
        />
        {corError && <p className="error">{corError}</p>}
        <label>Ano: </label>
        <input
          type="number"
          name="ano"
          min="1900"
          max="2099"
          step="1"
          value={ano}
          onChange={(e) => {
            setAno(e.target.value);
          }}
        />
        {anoError && <p className="error">{anoError}</p>}
        <input type="submit" onClick={handleSubmit} />
        <a href="/home">Cancelar</a>
      </form>
    </div>
  );
}

export default CarForm;
