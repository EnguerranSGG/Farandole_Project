import { useEffect, useState } from 'react';
import produits from "../JSON/produits.json";

function useProduits() {
    const [produitsData, setProduitsData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setProduitsData(produits);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchData();
    }, []);

    return produitsData;
}

export default useProduits;