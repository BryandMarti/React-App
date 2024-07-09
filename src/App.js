import './App.css';
import Info from './react1';
import React, {Component} from 'react';


// HARD ----------------------------------------
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userFavFood: [
        { name: 'Bryan Martinez', email: 'dbelwp@gmail.com', Food: 'Pupusas', Why_is_Fav:'I love Pupusas because they are so tasty'},
        { name: 'Juan Castilla', email: 'juan@gmail.com:', Food: 'Tacos De birria', Why_is_Fav:'They are different to every other taco'},
        { name: 'Jorge Perez', email: 'joPe@gmail.com', Food: 'Tamales', Why_is_Fav:'I like them because they are very filling'},
      ]
    }
  }
  render (){
    return (
      <div className = "foodInfo">
       {this.state.userFavFood.map((userFavFood,index) => (
        <Info key={index} userFavFood = {userFavFood} />
       ))}
      </div>
    );
  }
}







// Medium Challenge
// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       userFavFood: {
//         name: 'Bryan Martinez', 
//         email: 'dbelwp@gmail.com', 
//         Food: 'Pupusas', 
//         Why_is_Fav:'I love Pupusas because they are so tasty'
//       }
//     };
//   }
//   render (){
//     return (
//       <div>
//         <React1 userFavFood = {this.state.userFavFood} />
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           React codebase
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;