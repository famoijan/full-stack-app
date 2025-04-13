import React, { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmitUserData = (e) => {
    e.preventDefault();
    const frm = e.target;
    const name = frm.name.value;
    const email = frm.email.value;
    const user = { name, email };
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers([...users, data]);
      })
      .catch((error) => console.log(error));

    console.log(name, email);
    frm.name.value = "";
    frm.email.value = "";
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-center underline">
        User Management System
      </h1>
      <div className="">
        <h3 className="text-center py-5 text-3xl font-extrabold border-b-2 border-b-red-600">
          Total Users: {users?.length}
        </h3>

        <form
          onSubmit={handleSubmitUserData}
          className="bg-blue-200 max-w-3xl  border-blue-800 flex flex-col gap-2 p-4 mx-auto mt-5"
        >
          <h1 className="border-b py-3 mb-4"> Add new user</h1>
          <input
            type="text"
            className="p-3 rounded-sm text-base"
            name="name"
            placeholder="Enter user name"
            id=""
          />
          <input
            type="text"
            className="p-3 rounded-sm text-base"
            name="email"
            placeholder="Enter user email"
            id=""
          />

          <button className="bg-blue-950 text-white py-4 rounded-md mt-3 font-semibold">
            Add User
          </button>
        </form>
        {/* User Table */}
        <div className="bg-slate-300 p-6 rounded-md max-w-2xl  mx-auto mt-10">
          {/* User Tabble header */}
          <div className=" flex flex-row items-center text-xl font-bold">
            <p className="w-1/12  bg-slate-900 p-2 text-white">ID</p>
            <p className="w-6/12 bg-slate-900 p-2  text-white">Name</p>
            <p className="w-5/12 bg-slate-900 p-2 text-white">Email</p>
          </div>
          {/* Users Tabble data */}
          {users.map((user, index) => (
            <div className="flex flex-row items-center border-b border-b-slate-400 text-xl font-light">
              <p className="w-1/12 text-slate-900 p-2">{index + 1}</p>
              <p className="w-6/12 text-slate-900 p-2">{user?.name}</p>
              <p className="w-5/12 text-slate-900 p-2 ">{user?.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
