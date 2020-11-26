import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchQuery:''
    }


    handleOnChange = (event) => {
        this.setState({
             searchQuery: event.target.value
        }, () => {
            this.props.onFilter(this.state.searchQuery);
        })

    }

    render() {
        return(
            <form>
            <input type="text" name="searchQuery" value={this.state.searchQuery} onChange={this.handleOnChange} />
            </form>
        )}
    }


export default SearchBar;