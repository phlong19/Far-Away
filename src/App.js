import React, { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import List from "./components/List";
import Stats from "./components/Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Pant", quantity: 1, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((i) => i.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i))
    );
  };

  const handleResetItems = () => {
    const confirmed = window.confirm("Are you sure want to delete all items?");
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <List
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onResetItems={handleResetItems}
        items={items}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
