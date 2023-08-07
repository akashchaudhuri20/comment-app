import React from "react";
import CommentList from "./CommentList";
import CommentBox from "./CommentBox";

class App extends React.Component{

  state = {
    messages: [
      'React seems like a really cool library',
      'I love using components in React',
      'Makes development so easy',
      'It was hard to follow at first but now I love it'
    ]
  }

  addComment = (message) => {
    this.setState(
      function(previousState){
        var messages = previousState.messages.concat();
        messages.push(message);
        return {
          messages : messages
        }
      }
    );
  }

  deleteComment = (index) => {
    this.setState(
      function(previousState){
        var messages = previousState.messages.concat();
        messages.splice(index, 1);
        return {
          messages: messages
        }
      }
    );
  }

  render(){
    return(
      <div>
        <CommentBox addComment={this.addComment}/>
        <CommentList messages={this.state.messages}
                     deleteComment={this.deleteComment}/>
      </div>
    );
  }
}

export default App;
