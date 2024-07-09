import React, { Component } from 'react';

//Medium Challenge

class Info extends Component {
    render(){
        const { name,email,Food,Why_is_Fav} = this.props.userFavFood;
        return (
            <div>
                <h1>{name}</h1>
                <h3>Email: {email}</h3>
                <h4>Name of Favorite Food: {Food}</h4>
                <p> Why is their Fav : {Why_is_Fav} </p>
            </div>
        );
    }
}

export default Info;

// Very Easy Challenge
// class App extends Componet {
// render (){
//     return (
//         <div>
//             <h1> Bryan Martinez </h1>
//             <h3> dbelwp@gmail.com </h3>
//             <h4> Pupusas </h4>
//             <p> I love Pupusas because they are so tasty </p>
//         </div>
//     )
// }
// }


// Easy Challenge
// class App extends Componet {
//     constructor(props){
//         super(props);
//         this.state = {
//             person: {}
//         }
//     }
//     render(){
//     return (
//       <div>
//         <h1> Bryan Martinez </h1>
//         <h3> dbelwp@gmail.com </h3>
//         <h4> Pupusas </h4>
//         <p> I love Pupusas because they are so tasty </p>
//       </div>
//     )
// }
// }