import React from 'react';

// class Greeting extends React.Component{
// 	render(){
// 		<div className="greeting">
// 				Hello, {this.props.name}!
// 			</div>
// 	}
// }

// export default Greeting;
export default React.createClass({
    render: function() {
        return ( < div className = "greeting" >
            Hello, {
                this.props.name
            }!
            < /div>
        );
    },
});
