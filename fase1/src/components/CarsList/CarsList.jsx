import styles from "./CarsList.module.css";

function CarsList({ cars, onDelete }) {
  return (
    <div id="box">
      <h1>Lista de Carros</h1>
      <ul>
        {cars.length === 0 ? (
          <p>Lista de carros vazia.</p>
        ) : (
          cars.map((car) => (
            <li key={car.id}>
              {car.nome}{" "}
              <button
                className={styles.botoes}
                onClick={() => {
                  onDelete(car);
                }}
              >
                Excluir
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default CarsList;
