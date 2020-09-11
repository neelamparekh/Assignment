import React from 'react';
import './App.css';
import Competition from './Competition';



function App() {
  return (
    <div className="App">
      <h1> Get User Details </h1>
      <Competition />

    </div>
  );
}

export default App;

// import React, { Component } from 'react';
// import './App.css';
// import FruitsVegList from './Fruits & Vegg/FruitsVegList';

// class App extends Component {

//   onSubtract = (item, index) => {
//     const products = [this.state.products];
//     products[index].quantity -= 1;
//     this.setState({ products });
//   }

//   onAdd = (item, index) => {
//     const products = [this.state.products];
//     products[index].quantity += 1;
//     this.setState({ products });
//   }

//   render() {
//     const { products } = this.state;
//     let totalQuantity = 0;
//     let totalPrice = 0;
//     products.forEach((item) => {
//       totalQuantity += item.quantity;
//       totalPrice += item.quantity * item.price;
//     })

//     return (
//       <div>
//         <ul
//           data={this.state.products}
//           renderItem={({ item, index }) => (
//             <li
//               item={item}
//               onSubtract={() => this.onSubtract(item, index)}
//               onAdd={() => this.onAdd(item, index)}
//             />
//           )}
//           keyExtractor={item => item._id}
//         />
//         <p>Total Quantity: {totalQuantity}</p>
//         <p>Total Price: {totalPrice}</p>
//       </div>
//     );
//   }
// }

// export default App;