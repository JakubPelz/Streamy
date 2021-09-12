import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) { //if user click on form and there is an error then...
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        // If error and touched both of this things are true return error otherwise return an empty string
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (<div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete="off" />
            {this.renderError(meta)}
        </div>)
    }

    onSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field
                    name="description"
                    component={this.renderInput}
                    label="Enter Description"
                />
                <button className="ui button primary">Submit</button>
            </form>
        );
    };
};

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        // only ran if the user did not enter a title
        errors.title = "You must enter a title";
    }

    if (!formValues.description) {
        // only ran if the user did not enter a description
        errors.description = "You must enter a description";
    }
    return errors;
};

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);