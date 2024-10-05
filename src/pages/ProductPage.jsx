import React from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductTable from '../components/ProductTable';

const ProductsPage = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) {
    return <p className="text-center text-xl">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <ProductTable products={products} />
    </div>
  );
};

export default ProductsPage;
