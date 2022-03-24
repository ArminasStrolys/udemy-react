import React, { Component } from 'react';

class Searchbar extends Component {
    render() {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                <label>Search: </label>
                    <input type="text" placeholder='Enter car name' />
                </form>
            </div>
        );
    }
}

export default Searchbar;
