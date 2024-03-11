import React, { useState } from 'react';
import CarForm from '../CarForm/CarForm.jsx';
import CarsList from '../CarsList/CarsList.jsx';
import carsData from '../../carsData.js';

function CarDetail(props) {
    const [cars, setCars] = useState(carsData);

    const handleSubmit = (carData) => {
        setCars((prevCars) => [...prevCars, carData]);
    };

    function deletaCarro(carToDelete) {
        const updatedCarsList = cars.filter((car) => car.id !== carToDelete.id);
        setCars(updatedCarsList)
    }

    const renderPage = () => {
        switch (props.currentPage) {
            case 'CarForm':
                return <CarForm onSubmit={handleSubmit} />
            case 'CarsList':
                return <CarsList cars={cars} onDelete={deletaCarro} />

        }

    }
    return (
        <div>
            {renderPage()}
        </div>
    )
}

export default CarDetail;