import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import ProductsPage from './pages/ProductsPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

export default [{
    path: '/',
    element: <HomePage />
}, {
    path: '/about',
    lazy: async () => {
        const AboutPage = await import('./pages/AboutPage');
        return { Component: AboutPage }
    },
}, {
    path: '/articles',
    element: <ArticlesPage />
}, {
    path: '/products',
    element: <ProductsPage />
}, {
    path: '/shopping-cart',
    element: <ShoppingCartPage />
}];