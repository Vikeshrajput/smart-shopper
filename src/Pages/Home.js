import Navbar from '../features/Nabvar/Navbar';
import ProductList from '../features/product/components/ProductList';

function Home() {
    return (
        <div>
            <Navbar>
                <ProductList />
            </Navbar>
        </div>
    )
}

export default Home;