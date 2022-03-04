import React, { Component } from 'react';
import Input from './input';
import DropDown from './dropDown';
import CheckBox from './checkBox';
import Button from './button';


class Form extends Component {
    state = {
        jobs:[
            {id: 1, title :'Front-end developer'},
            {id: 2, title :'Back-end developer'},
            {id: 3, title :'Full-stack developer'},
            {id: 4, title :'Product owner'}
        ]
    }
    render() { 
        const {jobs} = this.state
        return (
            <div className="container form__box">
                <form className="row g-3 col-lg-12">
                    <Input />

                    <DropDown items={jobs}/>

                    <CheckBox />

                    <Button />
                </form>
            </div>
            
        );
    }
}
 
export default Form;