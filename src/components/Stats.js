import "../App.css";

function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🌠</em>
      </footer>
    );
  }

  const numItems = items.length;
  const packedItems = items.filter((i) => i.packed).length || 0;
  const percent = Math.round((100 / numItems) * packedItems) || 0;

  return (
    <footer className="stats">
      {percent !== 100 ? (
        <em>
          You have {numItems} in your list, and you already packed {packedItems}{" "}
          items ({percent} %)
        </em>
      ) : (
        <em>You got everything! Ready to go ✈ </em>
      )}
    </footer>
  );
}

export default Stats;
