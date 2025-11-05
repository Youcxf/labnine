import { useState, useEffect } from 'react';
import { useCars } from './CarsContext.jsx';
export default function CarForm() {
    const { editingCar, addCar, updateCar, cancelEdit } = useCars();
    const editing = Boolean(editingCar && editingCar.id);
    const [formData, setFormData] = useState({
        ownerName: '',
        licensePlate: '',
        carMake: '',
        carModel: '',
        year: '',
        color: ''
    });
    useEffect(() => {
        if (editingCar) {
            setFormData({
                ownerName: editingCar.ownerName || '',
                licensePlate: editingCar.licensePlate || '',
                carMake: editingCar.carMake || '',
                carModel: editingCar.carModel || '',
                year: editingCar.year || '',
                color: editingCar.color || ''
            });
        } else {
            // Reset form when not editing
            setFormData({
                ownerName: '',
                licensePlate: '',
                carMake: '',
                carModel: '',
                year: '',
                color: ''
            });
        }
    }, [editingCar]);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (editing) {
            updateCar(editingCar.id, formData);
        } else {
            addCar(formData);
        }
        // Reset form
        setFormData({
            ownerName: '',
            licensePlate: '',
            carMake: '',
            carModel: '',
            year: '',
            color: ''
        });
    };

    const handleCancel = () => {
        setFormData({
            ownerName: '',
            licensePlate: '',
            carMake: '',
            carModel: '',
            year: '',
            color: ''
        });
    };

    return (
        <div className="card">
            <section className="form-container section">
                <h2>{editing ? '✏ Edit Car Record' : '➕ Add New Car'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <input
                            type="text"
                            name="ownerName"
                            placeholder="Alex"
                            value={formData.ownerName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="licensePlate"
                            placeholder="CAR-123"
                            value={formData.licensePlate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <input
                            type="text"
                            name="carMake"
                            placeholder="Tesla"
                            value={formData.carMake}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="carModel"
                            placeholder="S3"
                            value={formData.carModel}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <input
                            type="number"
                            name="year"
                            placeholder="2020"
                            min="1900"
                            max="2100"
                            value={formData.year}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="color"
                            placeholder="White"
                            value={formData.color}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="button-group">
                        <button type="submit" className="btn-submit">
                            {editing ? 'Update Car' : 'Add Car'}
                        </button>
                        {editing && (
                            <button type="button" className="btn-cancel" onClick={handleCancel}>
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </section>
        </div>
    );
}