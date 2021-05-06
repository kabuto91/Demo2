import React, { Component } from 'react';

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0 }
        this.addCount = this.addCount.bind(this);
    }

    addCount(){
        this.setState({
            count:this.state.count+1
        })
    }

    render() { 
        return ( 
            <div>
                <p>你已经点击了：{this.state.count}次了</p>
                <button onClick={this.addCount}>点击</button>
            </div>
         );
    }
}
 
export default Example;