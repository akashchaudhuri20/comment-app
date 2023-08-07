import React from 'react';
import message from './message.png';
import trash from './trash.png';

class Comment extends React.Component {


  deleteComment = () => {
    this.props.deleteComment(this.props.index);
  };

  render() {
    return(
        <table className="comment">
            <tbody>
                <tr>
                    <td className="photo">
                        <img alt="" src={message}/>
                    </td>
                    <td className="message">
                        {this.props.message}
                    </td>
                    <td className="delete">
                        <img alt="" src={trash} 
                        onClick={this.deleteComment}/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
  }
}

export default Comment;
