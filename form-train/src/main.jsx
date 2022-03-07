import axios from 'axios';
import React, { Component } from 'react';
import Form from './components/form';
import Table from './components/table';

class Main extends Component {
    state = {
        coins : [],
        indexes:[
            { title: 'Asset', index: 'Asset' },
            { title: 'AssetLong', index: 'AssetLong' },
            { title: 'network', index: 'SystemProtocol' },
            { title: 'status', index: 'IsActive' }
        ],
        filteredCoins:[]
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
    handleSelectedNetwork = (e) => {
        console.log(e.target.value)
        const {coins} = this.state
        if(e.target.value === 'All') {
            this.setState({filteredCoins : coins})
        } else {
            const selectedCoin = coins.filter(coin  => coin.SystemProtocol === e.target.value)
            this.setState({filteredCoins : selectedCoin})

        }     
    }
    render() { 
        const {coins, indexes, filteredCoins} = this.state
        return (
            <div className="container">
                <Form lists={coins} handleSelectedNetwork={this.handleSelectedNetwork}/>
                <Table items={filteredCoins} indexes={indexes} />
            </div>
        );
    }
}
 
export default Main;