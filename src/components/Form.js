import { useState } from "react";
import "../App.css";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const submitHandle = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItems(newItem);

    // clear input
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={submitHandle}>
      <h3>What do you need for your trip?</h3>
      <select onChange={(e) => setQuantity(+e.target.value)} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button>ADD </button>
    </form>
  );
}

export default Form;
