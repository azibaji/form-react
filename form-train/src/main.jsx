import axios from 'axios';
import React, { Component } from 'react';
import Form from './components/form';
import Table from './components/table';

class Main extends Component {
    state= {
        coins : []
    }
    async componentDidMount(){
        try{
            const {data} = await axios.get('https://nova.bitcambio.com.br/api/v3/public/getassets')
            if(data){
                this.setState({coins: data.result})
                console.log(this.state.coins)
            }
        }
        catch(e){
            console.log(e)
        }
        
    }
    render() { 
        const {coins} = this.state
        return (
            <div>
                <Form />
                <Table items={coins} />
            </div>
        );
    }
}
 
export default Main;