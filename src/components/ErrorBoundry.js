import React, { Component } from 'react'

export default class ErroBoundry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }



    componentDidCatch(err, inf) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>There is An Error</h1>
        }
        return (
            this.props.children
        )
    }
}


