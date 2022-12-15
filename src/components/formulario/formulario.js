import { useState } from "react";

export default function FormularioComprador(props) {
 
    const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function cambioImput(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;

    let newData = { ...data };
    newData[nameInput] = value;
    setData(newData);
  }

  function onSubmit(evt) {
    if (data.name.length === 0) return;

    evt.preventDefault();
    props.onSubmit(evt, data);
  }

  return (
    <div className="cartForm">
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">
          Nombre
        </label>
        <input
          required
          value={data.name}
          name="name"
          type="text"
          onChange={cambioImput}
        />
      </div>

      <div>
        <label htmlFor="email">
          Email
        </label>
        <input
          required
          value={data.email}
          name="email"
          type="email"
          onChange={cambioImput}
        />
      </div>

      <div>
        <label htmlFor="phone">
          Teléfono
        </label>
        <input
          required
          value={data.phone}
          name="phone"
          type="number"
          onChange={cambioImput}
        />
      </div>

      <button className="button-15"
        disabled={data.name === "" || data.phone === "" || data.email === ""}
        type="submit">
        Finalizar Compra
      </button>
    </form>
    </div>
  );
}