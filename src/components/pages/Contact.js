import React, { Component } from 'react'
import axios from 'axios'
import './Contact.css'

const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

export default class Contact extends Component {
  
    constructor(){
        super()
      
        this.state={
          fullname:'',
            location:'',
              email:'',
            password:'',
            backgroundColor:'white'
            
      }
      this.changeFullname=this.changeFullname.bind(this)
      this.changeLocation=this.changeLocation.bind(this)
      this.changeEmail=this.changeEmail.bind(this)
      this.changePassword=this.changePassword.bind(this)
      this.onSubmit=this.onSubmit.bind(this)
    }
    changeFullname(e){
        this.setState({fullname:e.target.value})
      }
      changeLocation(e){
        this.setState({location:e.target.value})
      }
      changeEmail(e){
        this.setState({email:e.target.value})
      }
      changePassword(e){
        this.setState({password:e.target.value})
        if(strongRegex.test(e.target.value)) {
          this.setState({ backgroundColor: "green" });
      } else if(mediumRegex.test(e.target.value)) {
          this.setState({ backgroundColor: "orange" });
      } else {
          this.setState({ backgroundColor: "red" });
      }
      }
    onSubmit(event){
      event.preventDefault();
      const registered={
        fullname:this.state.fullname,
        location:this.state.location,
        email:this.state.email,
        password:this.state.password
      }
      axios.post('http://localhost:4000/app/contact',registered)
      .then(response=>console.log(response.data))
      alert("Successfully submitted")
       
      
    }
    render() {
        return (
            <div>
                <div className="container contactback">
            <div className="row">
                <div className=" col-md-6  form-col" >
                    <h2 style={{paddingTop:"4%",textAlign:"center"}}>Contact Us</h2>
                    <form onSubmit={this.onSubmit} >
                        <div className="form-group ">
                            <label for="name">Name</label>
                            <input required type="text" className="form-control " name="fullname" placeholder="Name" value={this.state.fullname}  onChange={this.changeFullname} />
                        </div>
                        <div className="form-group">
                            <label for="location">Location</label>
                            <input required type="text" className="form-control " name="location" placeholder="Location" value={this.state.location}  onChange={this.changeLocation}/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email address</label>
                            <input required type="email" className="form-control " name="email" aria-describedby="emailHelp" placeholder="Enter email"value={this.state.email}  onChange={this.changeEmail} />
                            <h5 id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</h5>
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input required style={{  backgroundColor: this.state.backgroundColor}} type="password" className="form-control " name="password" placeholder="Password" value={this.state.password}  onChange={this.changePassword} />
                        </div>
                        <div className="form-group form-check">
                            <input required  type="checkbox" className="form-check-input " id="exampleCheck1"  />
                            <label className="form-check-label " for="check">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-danger" style={{textAlign:"center"}}>Contact Us</button>
                    </form>

                </div>
            </div>


        </div>
            </div>
        )
    }
}
