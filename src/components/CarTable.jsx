export default function CarTable({ cars = [] }) {
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
                        </tr>
                        </thead>
                        <tbody>
                        {cars.map((car) => (
                            <tr key={car.id}>
                                <td>{car.ownerName}</td>
                                <td>{car.carMake}</td>
                                <td>{car.carModel}</td>
                                <td>{car.year}</td>
                                <td>
 <span
     className="color-badge"
     style={{backgroundColor: car.color.toLowerCase()}}
 >
 {car.color}
 </span>
                                </td>
                                <td>
                                    <span className="license-plate">{car.licensePlate}</span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </section>
        </div>
    );
}