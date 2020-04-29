import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartNotify extends Component {
    render() {
        return (
            <span>
                Cart items:
                <span className="badge badge-primary">
                    {this.props.cartItems}
                </span>
            </span>
        )
    }
}
const mapStateToProps = (state) => {
    return {cartItems: state.cart.length}
}

export default connect(mapStateToProps, {})(CartNotify)