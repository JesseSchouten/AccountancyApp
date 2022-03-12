import React from "react";
import axios from "axios";

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      zipCode: "",
      vatNumber: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  resetForm() {
    this.setState({
      name: "",
      address: "",
      zipCode: "",
      vatNumber: "",
    });
  }

  handleSubmit(event) {
    try {
      axios.post(
        "http://localhost:8000/company",
        {
          name: this.state.name,
          address: this.state.address,
          zipCode: this.state.zipCode,
          vatNumber: this.state.vatNumber,
          accountId: "00000000-0000-0000-0000-000000000000",
        },
        {
          headers: {
            // 'application/json' is the modern content-type for JSON, but some
            // older servers may use 'text/json'.
            // See: http://bit.ly/text-json
            "content-type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
    event.preventDefault();
    this.resetForm();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            name="address"
            type="text"
            value={this.state.address}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Zip Code:
          <input
            name="zipCode"
            type="text"
            value={this.state.zipCode}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          VAT:
          <input
            name="vatNumber"
            type="text"
            value={this.state.vatNumber}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
        <br />
      </form>
    );
  }
}

export default Company;
