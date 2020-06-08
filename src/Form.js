import React, { Component } from 'react';

export default class Form extends Component {
    initialState = {
        name: '',
        job: '',
        age: '',
        handle: ''
    };

    state = this.initialState;
}