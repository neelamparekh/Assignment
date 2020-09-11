import React from 'react';

const products = [
    { _id: 1, name: 'Apples', price: 50, quantity: 0 },
    { _id: 2, name: 'Oranges', price: 29, quantity: 0 },
    { _id: 3, name: 'Mangoes', price: 200, quantity: 0 },
];

class FruitsVegList extends React.Component {

    render() {
        const { item } = this.props;

        return (
            <div>
                <th>{item.name} - </th>
                <th>{item.price}</th>

                <button title="Subtract" onPress={this.props.onSubtract} ></button>
                <th>{item.quantity}</th>
                <button title="Add" onPress={this.props.onAdd} ></button>

            </div>
        )
    }
}
export default FruitsVegList;