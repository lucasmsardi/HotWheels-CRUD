import styles from './CarsList.module.css'

function CarsList({ cars, onDelete }) {
    return (
        <div id="box">
            <h1>Lista de Carros</h1>
            <ul>
                {cars.map((car, index) => {
                    return (
                        <li key={index}>{car.nome} <button className={styles.botoes} onClick={() => { onDelete(car) }}>Excluir</button></li>
                    )
                })}
            </ul>

        </div>
    )
}

export default CarsList;