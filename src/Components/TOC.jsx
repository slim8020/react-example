import React, { Component } from 'react';

class TOC extends Component {
    render() {
        var lists =[];
        var data = this.props.data;
        var i = 0;

        while(i< data.length){
            lists.push(<li key={data[i].id}><a href="#">{data[i].title}</a></li>);
            i++;
        }

        return (
            <nav>
                <ul>
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">Javascript</a></li>
                </ul>
            </nav>
        );
    }
}

export default TOC;