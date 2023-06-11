import React, { useEffect, useState } from 'react'
import ProductsDetails from '../../components/Products/ProductsDetails';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { useParams } from 'react-router-dom';
import { productData } from '../../static/data';

const ProductDetailPage = () => {
    const {name} = useParams();
    const [data, setData] = useState(null);
    const productName = name?.replace(/-/g, " ");

    useEffect(() => {
        const data = productData.find((i) => i.name === productName);
        setData(data);
    }, []);

    return (
        <div>
            <Header />
            <ProductsDetails data={data} />
            <Footer />
        </div>
    )
}

export default ProductDetailPage;
