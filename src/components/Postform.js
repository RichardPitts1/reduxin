import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'
import './components.css';

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        };

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
}

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit(e) {
    e.preventDefault();
    const post = {
        title: this.state.title,
        body: this.state.body
    }

    // Call action
    this.props.createPost(post)
}


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label><br />
                        <input type="text" name="title" onChange={this.onChange}
                        value={this.state.title} class="Title"/>
                    </div>
                    <br/>
                    <div>
                        <label>Body: </label><br />
                        <textarea name="body" onChange={this.onChange}
                        value={this.state.body} class="Body" />
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm)
