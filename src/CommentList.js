import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component{


    render(){
        var index = 0;
        return(
            <div className='commentList'>
              {this.props.messages.map(
                    (message)=> 
                        <Comment key={index} 
                        index={index++} 
                        message={message} 
                        {...this.props}/>
                )}
            </div>
        );
    }
}

export default CommentList;

