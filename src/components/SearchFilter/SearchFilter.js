import { Component } from 'react';

class SearchFilter extends Component{
    state = {
        name: '',
        number: ''
    };
    
    render() {
        return (
            <label> Find contacts by name
                <input type="text" name="query" autoComplete="off" placeholder="Search contact" />
            </label>
        );
}
}
export default SearchFilter