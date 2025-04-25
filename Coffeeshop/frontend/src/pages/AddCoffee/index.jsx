import React from "react";
import InputGroup from "../../components/ui/InputGroup";
import toast from "react-hot-toast";

const AddCoffee = () => {
  const handleSubmit = (e) => {
    // toast.loading("Please wait for a coffee to be added");
    e.preventDefault();
    const frm = e.target;
    const cofName = frm.name.value;
    const chef = frm.chef.value;
    const supplier = frm.supplier.value;
    const taste = frm.taste.value;
    const category = frm.category.value;
    const details = frm.details.value;
    const photo = frm.photo.value;

    const coffeeObj = {
      cofName,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(coffeeObj);
    fetch("http://localhost:4400/coffees", {
      method: "POST",
      body: JSON.stringify(coffeeObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          toast.success("Coffee Added successfully");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-[#F4F3F0] py-[70px] px-[112px] rounded-md mt-14"
      >
        <h1 className="text-[#374151] text-[45px] text-center">
          Update Existing Coffee Details
        </h1>
        <p className="max-w-4xl text-center mx-auto text-[#1B1A1A]/70 text-lg mt-8">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-8">
          {/* Input container */}
          <InputGroup
            label={"Name"}
            name={"name"}
            placeholder={"Enter coffee name"}
            className={"col-span-1"}
          />
          <InputGroup
            label={"Chef"}
            name={"chef"}
            placeholder={"Enter coffee Chef"}
            className={"col-span-1"}
          />
          <InputGroup
            label={"Supplier"}
            name={"supplier"}
            placeholder={"Enter coffee supplier"}
            className={"col-span-1"}
          />
          <InputGroup
            label={"Taste"}
            name={"taste"}
            placeholder={"Enter coffee taste"}
            className={"col-span-1"}
          />

          <InputGroup
            label={"Category"}
            name={"category"}
            placeholder={"Enter coffee category"}
            className={"col-span-1"}
          />
          <InputGroup
            label={"Details"}
            name={"details"}
            placeholder={"Enter coffee details"}
            className={"col-span-1"}
          />

          <InputGroup
            label={"Photo"}
            name={"photo"}
            placeholder={"Enter photo URL"}
            className={"col-span-1"}
          />
        </div>
        <button
          type="submit"
          className="bg-[#D2B48C] cursor-pointer hover:scale-95 active:scale-105 transition-all text-[#331A15] text-2xl w-full mt-6 py-3 border-2 border-[#331A15]"
        >
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;
