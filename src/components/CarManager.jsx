import Header from './Header.jsx';
import CarForm from './CarForm.jsx';
import CarTable from './CarTable.jsx';
import Footer from './Footer.jsx';
import { CarsProvider } from './CarsContext.jsx';
export default function CarManager() {
    return (
        <CarsProvider>
            <div className="container">
                <Header />
                <CarForm />
                <CarTable />
                <Footer />
            </div>
        </CarsProvider>
    );
}