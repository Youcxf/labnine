import CarTableHeader from './CarTableHeader.jsx';
import CarTableBody from './CarTableBody.jsx';
import { useCars } from './CarsContext  .jsx';
export default function CarTable() {
    const { cars, startEdit, deleteCar } = useCars();
    return (
        <div className="card">
            <section className="table-container section">
                <h2>📋 Car Registry ({cars.length} vehicles)</h2>
                {cars.length === 0 ? (
                    <p className="empty-message">No cars registered yet.</p>
                ) : (
                    <table>
                        <thead>
                        <tr>
                            <th>Owner</th>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>Color</th>
                            <th>Plate</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <CarTableBody cars={cars} />
                    </table>
                )}
            </section>
        </div>
    );
} 
