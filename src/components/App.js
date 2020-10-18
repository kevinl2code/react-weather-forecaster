import React from 'react'
import Header from './Header'
import InputField from './InputField'
import OutputGrid from './OutputGrid'

class App extends React.Component {
    render() {
        return(
            <div className="ui container">
                <Header />
                <InputField />
                <OutputGrid />
            </div>
        )
    }
}

export default App