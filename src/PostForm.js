/* 
 integrate form post with axios POST method using JSON Placeholder

 need to capture userID, title, body as input

*/

import React, { Component } from "react";
import axios from "axios";
import "./postform.css";

class PostForm extends Component {

    constructor(props) {
        super(props);
    
    this.state = {
        userID: '',
        title:'',
        body:''       
      }
      this.handleChange = this.handleChange.bind(this);

    }
   

    handleChange(event) {
       //  console.log(event.target.value);
         let { name,value } = event.target;
         this.setState({ [name]:value });
      }

      handleSubmit = event => {
        event.preventDefault();
    
        const formData = {
          userid: this.state.userID,
          title:this.state.title,
          body:this.state.body,
        };


    
        console.log(JSON.stringify(formData));
        // axios.post(`https://jsonplaceholder.typicode.com/posts`, { user })
        //   .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        //   })

        axios.post(`https://jsonplaceholder.typicode.com/users`, { formData })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
      
  
  render() {
    return (
      <div>         
            <form  onSubmit={this.handleSubmit}>
                <label>User ID:</label>
                <input type="text"
                 name="userID"
                 value={this.state.userID}
                  onChange={this.handleChange}/>
                  <br></br>
                <label>Title:</label>
                <input type="text"
                value={this.state.title}
                 name="title"
                  onChange={this.handleChange}/>
                   <br></br>
                <label>Body:</label>
                <input type="text"
                value={this.state.body}
                 name="body"
                  onChange={this.handleChange}/>
                   <br></br>
                <input type="submit" value="SUBMIT"/>
                
            </form>
          
    </div>
    );
  }

}

export default PostForm;

