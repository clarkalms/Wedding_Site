import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";

class Form extends Component {

  state = {
    firstName: "",
    lastName: "",
    numOfGuests: ""
  };

  componentDidMount(){
    var elem = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elem, {
        dropdownOptions: {
            option1: "1",
            option2: "2",
            option3: "3"
        }
    });
    // instances.getSelectedValues();
    // var instance = M.FormSelect.getInstance(elem);
    // instance.getSelectedValues();
    // this.setState({
    //     numOfGuests: "2"
    // });
}

  handleInputChange = event => {

    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
 
    event.preventDefault();

    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: ""
    });
  };

  render() {
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
           
          <button onClick={this.handleFormSubmit}>Submit</button>

          <div class="input-field col s12">
                <select>
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                </select>
                <label>Materialize Select</label>
            </div>
        </form>
      </div>
    );
  }
}

export default Form;