import Header from "./Header.jsx";
import Food from "./Food.jsx";
import Footer from "./Footer.jsx";

import Card from "./Card.jsx";

import Button from "./Button.jsx";

import Student from "./Student.jsx";

import UserGreeting from "./UserGreeting.jsx";

import List from "./List.jsx";

import ProfilePicture from "./ProfilePicture.jsx";

import MyComponent from "./MyComponent.jsx";
import CounterComponent from "./CounterComponent.jsx";
import MyComponent2 from "./MyComponent2.jsx";

import ColorPicker from "./ColorPicker.jsx";

import MyComponent3 from "./MyComponent3.jsx";

import ArrayStateUpdate from "./ArrayStateUpdate.jsx";

import MyCoponent4 from "./MyCoponent4.jsx";

import ToDoList from "./ToDoList.jsx";

import MyComponent5 from "./MyComponent5.jsx";
import MyComponent6 from "./MyComponent6.jsx";

import DigitalClock from "./DigitalClock.jsx";

import ComponentA from "./ComponentA.jsx";

import MyComponent7 from "./MyComponent7.jsx";

import StopWatch from "./StopWatch.jsx";
function App() {
  const fruitsWithCalAsProp = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];
  return (
    <>
      <Header />
      <Food />
      <Footer />
      <hr />
      <hr />
      <Card />
      <Card />
      <Card />
      <Card />
      <hr />
      <hr />
      <Button />
      <Button />
      <hr />
      <hr />
      <Student name="Spongbob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student />
      <hr />
      <hr />
      <UserGreeting isLoggedIn={true} username="Hadi" />
      <UserGreeting isLoggedIn={false} username="Hadi" />
      <UserGreeting isLoggedIn={true} />
      <hr />
      <hr />
      {fruitsWithCalAsProp.length > 0 && (
        <List items={fruitsWithCalAsProp} category="Fruits" />
      )}{" "}
      <hr />
      <hr />
      <p>Handleing click events</p>
      <ProfilePicture />
      <hr />
      <hr />
      <p>React hook: useState</p>
      <MyComponent />
      <hr />
      <CounterComponent />
      <hr />
      <hr />
      <p>onChange event handler</p>
      <MyComponent2 />
      <hr />
      <hr />
      <ColorPicker />
      <hr />
      <hr />
      <p>updater function</p>
      <MyComponent3 />
      <hr />
      <hr />
      <p>update state of arrays</p>
      <ArrayStateUpdate />
      <hr />
      <hr />
      <p>update array of objects</p>
      <MyCoponent4 />
      <hr />
      <hr />
      <ToDoList />
      <hr />
      <hr />
      <p>useEffect hook</p>
      <MyComponent5 />
      <hr />
      <hr />
      <p>useEffect hook</p>
      <MyComponent6 />
      <hr />
      <hr />
      <DigitalClock />
      <hr />
      <hr />
      <p>Properties: useContext</p>
      <ComponentA />
      <hr />
      <hr />
      <p>useref: renders once, improves the efficiency</p>
      <p>but useState: Re-renders the component when the state value changes</p>
      <MyComponent7 />
      <hr />
      <hr />
      <p>useState, useEffect, useRef</p>
      <StopWatch />
    </>
  );
}

export default App;
