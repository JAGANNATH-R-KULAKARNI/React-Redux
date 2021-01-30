import React , {Component} from 'react';
import {connect} from 'react-redux';
import './Counter.css';
import {dispatch } from 'react-redux';


class Counter extends Component
{
    increment = () =>
    {
        this.props.dispatch({type : "INCREMENT"});
    }

    decrement = () =>
    {
        this.props.dispatch({type : "DECREMENT"});
    }

    render()
    {
        return (
            <div class="card">
  <p><button onClick={this.increment}>Increment</button></p>
  <h1>Counter</h1>
  <p class="price">{this.props.count}</p>
  <p><button onClick={this.decrement}>Decrement</button></p>
</div>
        );
    }
} 

let mapStateToProps = (state) =>
{
    return {
        count : state.count
    };
}
export default connect(mapStateToProps)(Counter);