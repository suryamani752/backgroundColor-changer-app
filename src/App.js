import "./App.css";

function App() {
  const handleClick = (e) => {
    const bodyBackground = document.querySelector("body");
    bodyBackground.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  };
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <>
      <div className="container">
        <h1>suryamani kumar</h1>
        <button className="btn" onClick={handleClick}>
          click
        </button>
      </div>
    </>
  );
}

export default App;
