function Button() {
  const styles = {
    backgroundColor: "hsl(200, 1000%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    marginRight: "20px",
  };

  let count = 0;
  //const handleClick = (e) => console.log(e);
  const handleClick = (e) => (e.target.textContent = "Ouch!");

  return (
    <button onClick={(e) => handleClick(e)} style={styles}>
      Click me
    </button>
  );
}

export default Button;
