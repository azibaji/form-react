import React, { Component } from 'react';
import Input from './input';
import DropDown from './dropDown';
import CheckBox from './checkBox';
import Button from './button';


class Form extends Component {
    state = {
        networks:[]
    }

    render() { 
        const {lists, handleSelectedNetwork, handleCoinSelector, checkBoxHandler, addNewCoin} = this.props
        let networks = this.props.lists.map(coin=> coin.SystemProtocol)
        networks = [...new Set(networks), 'All'];
        return (
            <div className="container form__box">

                <form className="row g-3 col-lg-12">

                    <Input coinSelector={handleCoinSelector}/>

                    <DropDown items={networks} label={'Networks'} selectedNetwork={handleSelectedNetwork} />

                    <CheckBox checkBoxHandler={checkBoxHandler} />

                    <Button  addNewCoin={addNewCoin}/>
                </form>
            </div>
            
        );
    }
}
 
export default Form;