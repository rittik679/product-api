import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto bg-white border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Image</th>
            <th className="px-4 py-2 border">Title</th>
            {/* <th className="px-4  py-2 border w-1/4">Description</th> Set width here */}
            <th className="px-4 py-2 border">Price</th>
            <th className="px-4 py-2 border">Category</th>
            <th className="px-4 py-2 border">Tags</th>
            <th className="px-4 py-2 border">Rating</th>
            <th className="px-4 py-2 border">Stock</th>
            <th className="px-4 py-2 border">Brand</th>
            <th className="px-4 py-2 border">SKU</th>
            <th className="px-4 py-2 border">Weight (g)</th>
            <th className="px-4 py-2 border">Dimensions (W x H x D)</th>
            <th className="px-4 py-2 border">Warranty</th>
            <th className="px-4 py-2 border">Shipping Info</th>
            <th className="px-4 py-2 border">Availability</th>
            <th className="px-4 py-2 border">Return Policy</th>
            <th className="px-4 py-2 border">Minimum Order</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="text-center">
              <td className="px-4 py-2 border">{product.id}</td>
              <td className="px-4 py-2 border">
                <img src={product.images[0]} alt={product.title} className="w-16 h-16 object-cover" />
              </td>
              <td className="px-4 py-2 border">{product.title}</td>
              {/* <td className="px-4 py-2 border w-1/4">{product.description}</td> Set width here */}
              <td className="px-4 py-2 border">${product.price.toFixed(2)}</td>
              <td className="px-4 py-2 border">{product.category}</td>
              <td className="px-4 py-2 border">
                {product.tags.join(', ')} {/* Displaying tags as a comma-separated list */}
              </td>
              <td className="px-4 py-2 border">{product.rating}</td>
              <td className="px-4 py-2 border">{product.stock}</td>
              <td className="px-4 py-2 border">{product.brand}</td>
              <td className="px-4 py-2 border">{product.sku}</td>
              <td className="px-4 py-2 border">{product.weight}</td>
              <td className="px-4 py-2 border">
                {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth}
              </td>
              <td className="px-4 py-2 border">{product.warrantyInformation}</td>
              <td className="px-4 py-2 border">{product.shippingInformation}</td>
              <td className="px-4 py-2 border">{product.availabilityStatus}</td>
              <td className="px-4 py-2 border">{product.returnPolicy}</td>
              <td className="px-4 py-2 border">{product.minimumOrderQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
