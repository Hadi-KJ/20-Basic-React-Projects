import PropTypes from "prop-types";

function List(props) {
  const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
  const listItems = fruits.map((fruit) => <li>{fruit}</li>);
  //-------------------------------//
  const fruitsWithCal = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  //fruitsWithCal.sort((a, b) => a.name.localeCompare(b.name)); //alphabetical
  //fruitsWithCal.sort((a, b) => b.name.localeCompare(a.name));//reverse alphabetical
  fruitsWithCal.sort((a, b) => a.calories - b.calories); //numeric

  const listItemsWithCal = fruitsWithCal.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; <b>{fruit.calories}</b>
    </li>
  ));
  //-------------------------------//
  const lowCalFruit = fruitsWithCal.filter((fruit) => fruit.calories < 100);
  const listLowCalFruit = lowCalFruit.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; <b>{fruit.calories}</b>
    </li>
  ));
  //-------------------------------//
  const category = props.category;
  const fruitsWithCalAsProp = props.items;
  const listFruitsWithCalAsProp = fruitsWithCalAsProp.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; <b>{fruit.calories}</b>
    </li>
  ));

  return (
    <>
      <ol>{listItems}</ol>
      <h3>Fruits with calories sorted</h3>
      <ol>{listItemsWithCal}</ol>
      <h3>Fruits with calories less than 100</h3>
      <ol>{listLowCalFruit}</ol>
      <h3>Fruits with calories using property feature</h3>
      <h4 className="list-category">{category}</h4>
      <ol className="list-items">{listFruitsWithCalAsProp}</ol>
    </>
  );
}

List.defaultProps = {
  category: "",
  items: [],
};

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
export default List;
