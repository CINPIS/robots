import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
//import { robots } from './robots';
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [count, setCount] = useState(0);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
      console.log(count);
  }, [count]);
  // [] => kind like a shortcut for compound did mount.
  // only runs if counts changes.

  const filterRobots = robots.filter((robot) => {
    return robot.name
      .toLocaleLowerCase()
      .includes(searchfield.toLocaleLowerCase());
  });
  if (robots.lenght === 0) {
    //or !robots.lenght which would be false..
    return <h1>Loading..</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <button onClick={()=>setCount(count+1)}>Click Me!</button>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filterRobots} />
        </Scroll>
      </div>
    );
  }
}

//search box must communicate with cardlist to search. In the one flow diagram,
//one need to send information to the parent to tell the other what to do.

export default App;
