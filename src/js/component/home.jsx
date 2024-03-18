import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  //---------la llamada a la API

  function createUser() {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/adri12", {
      method: "POST",
      body: JSON.stringify([]),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  //----------

//   function leerTarea() {
//     fetch("https://playground.4geeks.com/apis/fake/todos/user/adri12", {
//       method: "GET",
//     })
//       .then((response) => response.json())
//       .then((data) => setTodos(data))
//       .catch((error) => console.log(error));
//   }
//   //------------

//   function actualizarLista() {
//     fetch("https://playground.4geeks.com/apis/fake/todos/user/adri12", {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(todos),
//     })
//       .then((response) => response.json())
//       .then((data) => setTodos(data))
//       .catch((error) => console.log(error));
//   }

  useEffect(() => {
    //getInfo()
    createUser();
   // leerTarea();
  }, []);

  return (
    <div className="container">
      <h1>My Todos</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat(inputValue));
                setInputValue("");
                actualizarLista();
              }
            }}
            placeholder="What do you need to do "
          />{" "}
        </li>
        {todos.map((item, index) => (
          <li>
            {item}
            <i
              className="fas fa-trash"
              onClick={() =>
                setTodos(
                  todos.filter((t, currentIndex) => index != currentIndex)
                )
              }
            >
              {" "}
            </i>
          </li>
        ))}
      </ul>
      <div>23 tasks</div>
    </div>
  );
};

export default Home;
