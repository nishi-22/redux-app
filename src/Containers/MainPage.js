import React,{ Component } from 'react';
import {connect} from 'react-redux';
import DisplayCounter from '../Components/DisplayCounter/DisplayCounter';
import ChangeCounter from '../Components/ChangeCounter/ChangeCounter';

class MainPage extends Component{

    state = {
        counter:0
    };

    render(){
        return(
            <div>
                <DisplayCounter value={this.props.ctr}/>
                <ChangeCounter label="Increment" click={this.props.onIncrementCounter}/>
                <ChangeCounter label="Decrement" click={this.props.onDecrementCounter}/>
                <ChangeCounter label="Add 5" click={this.props.onAddCounter}/>
                <ChangeCounter label="Subtract 5" click={this.props.onSubCounter}/>
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
};

const mapDispatchToProps =(dispatch)=> {
    return {
        onIncrementCounter:()=> dispatch({type:'INCREMENT'}),
        onDecrementCounter:()=> dispatch({type:'DEC'}),
        onAddCounter:()=>dispatch({type:'ADD',value: 5}),
        onSubCounter:()=>dispatch({type:'SUB',value:5})
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);