// import React, { Component } from 'react';
import React from 'react';
class Comment extends React.Component {
// class Comment extends Component {
    render(){
        return (
        <div className="comment">{this.props.commentText}</div>
        );
    };
}
export default Comment;
