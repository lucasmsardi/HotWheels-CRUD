import "./CarForm.module.css";
import { useState } from "react";

function CarForm({ onSubmit }) {
    const [carData, setCarData] = useState({
        nome: '',
        marca: '',
        cor: '',
        ano: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCarData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(carData);
        setCarData({
            nome: '',
            marca: '',
            cor: '',
            ano: '',
        });
    };

    return (
        <div id="box">
            <h1>Adicionar Carro</h1>
            <form>
                <label>Nome: </label>
                <input type="text" name="nome" value={carData.nome} onChange={handleChange} />
                <label>Marca: </label>
                <input type="text" name="marca" value={carData.marca} onChange={handleChange} />
                <label>Cor: </label>
                <input type="text" name="cor" value={carData.cor} onChange={handleChange} />
                <label>Ano: </label>
                <input type="text" name="ano" value={carData.ano} onChange={handleChange} />
                <input type="submit" onClick={handleSubmit} />
                <a href="/home">Cancelar</a>
            </form>
        </div>
    );

}

export default CarForm;