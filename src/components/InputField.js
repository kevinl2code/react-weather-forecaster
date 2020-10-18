import React from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../actions'


class InputField extends React.Component {
    state = { formValue: '' }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.fetchWeather(this.state.formValue)
        this.setState({ formValue: '' })
    }

    render() {
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <input 
                            onChange={(e) => this.setState({ formValue: e.target.value })}
                            type="text" 
                            value={this.state.formValue} 
                        />
                        <div className="ui pointing label">
                        Please enter a city
                      </div>
                    </div>
                    
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { state: {} }
}

export default connect(mapStateToProps, { fetchWeather })(InputField)