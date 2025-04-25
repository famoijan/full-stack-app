import React from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const productData = useLoaderData();

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:3500/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deleteCount > 0) {
          alert("The prodcut is successfully deleted");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-slate-700 max-w-xl mx-auto p-3 rounded-lg mt-20">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Button Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {productData?.map((product, index) => (
              <tr key={productData?._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{product?.name}</td>
                <td>{product?.price}</td>
                <div className="text-right">
                  <button
                    onClick={() => handleDelete(product?._id)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
