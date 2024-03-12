import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/products">Products</Link>
            <Link to="/shopping-cart">Shopping Cart</Link>
        </div>
        <h1>Home</h1>
        </>
    );
}

export default HomePage;