import React, { useState } from "react";
import "../App.css";

function List({ items, onDeleteItem, onToggleItem, onResetItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((i) => (
          <Item
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            key={i.id}
            data={i}
          ></Item>
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={onResetItems}>Reset</button>
      </div>
    </div>
  );
}

function Item({ data, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={data.packed}
        value={data.packed}
        onChange={() => onToggleItem(data.id)}
      />
      <span style={data.packed ? { textDecoration: "line-through" } : {}}>
        {data.quantity} {data.description}
      </span>
      <button onClick={() => onDeleteItem(data.id)}>❌</button>
    </li>
  );
}

export default List;
