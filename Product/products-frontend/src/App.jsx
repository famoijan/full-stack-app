import React from "react";
// import toast from "react-hot-toast";

const App = () => {
  const handleProduct = (e) => {
    e.preventDefault();
    const frm = event.target;
    const name = frm.pName.value;
    const price = frm.pPrice.value;
    const product = { name, price };

    fetch("http://localhost:3500/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          alert("A product has been added successfully");
          frm.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form
        onSubmit={handleProduct}
        className="max-w-3xl mx-auto p-8 rounded-lg bg-slate-800 mt-10"
      >
        <h1 className="text-2xl font-bold border-b-2 border-b-white text-center py-2 text-white">
          Product Form
        </h1>
        <div className="mt-10">
          <div className="flex flex-row items-center mt-5">
            <label
              htmlFor="productName"
              className="w-4/12 text-white font-bold text-lg"
            >
              Product Name:
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              id="productName"
              name="pName"
              className="p-2 rounded-md w-full bg-slate-200 text-black placeholder:text-slate-700"
            />
          </div>

          <div className="flex flex-row items-center mt-5">
            <label
              htmlFor="productPrice"
              className="w-4/12 text-white font-bold text-lg"
            >
              Product Price:
            </label>
            <input
              type="number"
              placeholder="Enter product price"
              id="productPrice"
              name="pPrice"
              className="p-2 rounded-md w-full bg-slate-200 text-black placeholder:text-slate-700"
            />
          </div>
        </div>
        <button className="btn btn-success w-full rounded-lg py-5 text-white mt-10">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default App;
