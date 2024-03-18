import { useEffect, useState } from 'react';
import produits from "../JSON/produits.json";

function useProducts() {
    const [productsData, setProductsData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setProductsData(produits);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchData();
    }, []);

    return productsData;
}

export default useProducts;