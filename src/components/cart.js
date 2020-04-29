import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeItem } from './actions';

class Cart extends Component {

    handleClick(id, name, price) {
        // 1 - preparar un objeto
        // 2 - enviar al actionCreator
        // 3 - con el actionObj en las manos: dispatch
        let itemObj = {
            id: id,
            name: name,
            price: price
        }
        let actionObj = removeItem(itemObj);
        
        // llamar store.dispatch()
        this.props.dispatchFunction(actionObj);

    }

    render() {
        const cartList = this.props.items.map(item =>
            (   
                <div key={item.id}>
                    {item.id}: {item.name}, €{item.price}
                    <br/>
                    <button
                        className="btn btn-primary"
                        
                        onClick={() => this.handleClick(item.id, item.name, item.price)}>
                        Remove from cart
                    </button>
                    <br/>
                    <br/>
                </div>
            )
            );
        return (
            <div>
                <h1>Aqui es el Carrito</h1>
                {cartList}
            </div>
        );
    }

}

// 1 - mapStateToProps
//      1.1 debe retornar siempre un objeto
//      1.2 debe recibir un parametro que representará el STATE de la STORE

// 2 - mapDispatchToProps,
const mapStateToProps = (state) => {
    // podré gracias al connect, acceder el state con: this.props.items
    return {
        items: state.cart
    }
}
// disponibilizar para este componente el acesso a la funcion DISPATCH
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFunction: dispatch     
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
