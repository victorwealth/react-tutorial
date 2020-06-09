import React, { Component } from 'react';

class Form extends Component {
    initialState = {
        name: '',
        job: '',
        age: '',
        gender: ''
    };

    state = this.initialState;

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState)
    }

    render() {
        const { name, job, age, gender } = this.state;
        return (
            <form>
                <br/>
                <h3>Add new record</h3>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Job</label>
                    <input
                    className="form-control"
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Age</label>
                    <input
                    className="form-control"
                    type="text"
                    name="age"
                    id="age"
                    value={age}
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Gender</label>
                    <input
                    className="form-control"
                    type="text"
                    name="gender"
                    id="gender"
                    value={gender}
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input type="button" className="btn btn-primary" value="Submit" onClick={this.submitForm} />
                </div>
            </form>
        )
    }
}

export default Form;