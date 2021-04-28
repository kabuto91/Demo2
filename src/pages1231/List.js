import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <h2>列表{this.state.id}</h2>
         );
    }

    componentDidMount(){
        // console.log(this.props.match.params.id);
        let temId = this.props.match.params.id;
        this.setState({id:temId})
    }
}
 
export default List;