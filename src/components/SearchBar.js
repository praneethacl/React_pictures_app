import React from 'react';

class SearchBar extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            term: ''
        }
        this.onFormSubmit = this.onFormSubmit.bind(this); 
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(event) {
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Search</label>
                        <input 
                        type="text" 
                        value = {this.state.term}
                        onChange={this.onInputChange }/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;