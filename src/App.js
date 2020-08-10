import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personState, setPersonState]= useState({
    persons: [
      {name:'Nora', age:32},
      {name: 'Habib', age: 32},
      {name: 'Max', age:28}
    ],
    otherState: 'some other value'
  });

  const [otherState, setOtherState] = useState('some other value');

  const switchNameHandler = (newName) => {
    // console.log('was clicked');
    // DO NOT DO THIS this.state.persons[0].name = 'Max'
    // INSTEAD we use setState
    setPersonState({
      persons: [
        {name:'Julie-Nora', age:33},
        {name: newName, age: 32},
        {name: 'Keon', age:12}
      ]
  
    })
  }

  const nameChangeHandler = (event) => {
    setPersonState({
      persons: [
        {name:'Julie-Nora', age:33},
        {name: event.target.value, age: 32},
        {name: 'Keon', age:12}
      ]
    })
  }
  const style={
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

    return (
      <div className="App">
        <h1>  Hi, I'm a react app!</h1>
        <p>This is really working</p>
        <button style={style} onClick={switchNameHandler}>Switch Name</button>
        <Person 
        name={personState.persons[0].name} 
        age={personState.persons[0].age} />
        <Person 
        name={personState.persons[1].name} 
        age={personState.persons[1].age}
        click={switchNameHandler.bind(this, 'MAX')}
        change={nameChangeHandler}> Hobbies: Finding new ways to make money </Person>
        <Person 
        name={personState.persons[2].name} 
        age={personState.persons[2].age} />
      </div>
    );
}

export default app;

