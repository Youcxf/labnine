import { createContext, useContext, useState } from 'react';
// Create the context
const CarsContext = createContext();
// Custom hook to use the context

export function useCars() {
    const context = useContext(CarsContext);
    if (!context) {
        throw new Error('useCars must be used within a CarsProvider');
    }
    return context;
}

export function CarsProvider({ children }) {
    const [cars, setCars] = useState([
        { id: 1, ownerName: 'Alice Johnson', carMake: 'Toyota', carModel: 'Camry', year: '2021', color: 'Blue', licensePlate: 'ALC1021' },
        { id: 2, ownerName: 'Bob Smith', carMake: 'Honda', carModel: 'Civic', year: '2019', color: 'Red', licensePlate: 'BOB-2199'
        },
        { id: 3, ownerName: 'Carol Davis', carMake: 'Ford', carModel: 'F-150', year: '2022', color: 'Black', licensePlate: 'CRL-5522'
        },
    ]);
    const [editingCar, setEditingCar] = useState(null);
    // Add a new car
    const addCar = (carData) => {
        const newCar = {
            ...carData,
            id: Date.now() // Simple unique ID
        };
        setCars(prevCars => [...prevCars, newCar]);
    };
    // Update an existing car
    const updateCar = (id, carData) => {
        setCars(prevCars =>
            prevCars.map(car => car.id === id ? { ...car, ...carData } : car)
        );
        setEditingCar(null);
    };
    // Delete a car
    const deleteCar = (id) => {
        setCars(prevCars => prevCars.filter(car => car.id !== id));
    };
    // Start editing a car
    const startEdit = (car) => {
        setEditingCar(car);
    };
    // Cancel editing
    const cancelEdit = () => {
        setEditingCar(null);
    };
    const value = {
        cars,
        editingCar,
        addCar,
        updateCar,
        deleteCar,
        startEdit,
        cancelEdit
    };
    return (
        <CarsContext.Provider value={value}>
            {children}
        </CarsContext.Provider>
    );
}