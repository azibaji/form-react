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
        filteredCoins:[],
        newCoin:{
            Asset:'',
            SystemProtocol:'',
            IsActive:false,
        }
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
        let {newCoin} = this.state 
        newCoin.SystemProtocol = e.target.value
        this.setState({newCoin})

        const {coins} = this.state
        if(e.target.value === 'All') {
            this.setState({filteredCoins : coins})
        } else {
            const selectedCoin = coins.filter(coin  => coin.SystemProtocol === e.target.value)
            this.setState({filteredCoins : selectedCoin})

        }     
    }
    handleCoinSelector= (e) =>{
        let {newCoin} = this.state 
        newCoin.Asset = e.target.value
        this.setState({newCoin})

        const {coins} = this.state
        let selectedCoin = coins.filter(coin => coin.Asset.includes((e.target.value).toUpperCase()) )
        this.setState({filteredCoins: selectedCoin})
    }
    checkBoxHandler = (e) => {
        let {newCoin} = this.state 
        newCoin.IsActive = e.target.checked
        this.setState({newCoin})

        let activeCoins = this.state.coins.filter(coin => coin.IsActive === e.target.checked)
        this.setState({filteredCoins : activeCoins})
    }
    addNewCoin = (e) =>{
        e.preventDefault()
        let {coins, newCoin} = this.state
        coins = [...new Set(coins), newCoin]
        console.log(coins)
        this.setState({filteredCoins : coins})
    }
    render() { 
        const {coins, indexes, filteredCoins} = this.state
        return (
            <div className="container">

                <Form lists={coins} 
                    handleSelectedNetwork={this.handleSelectedNetwork} 
                    handleCoinSelector={this.handleCoinSelector}
                    checkBoxHandler={this.checkBoxHandler}
                    addNewCoin={this.addNewCoin}/>

                <Table items={filteredCoins} indexes={indexes} />
            </div>
        );
    }
}
 
export default Main;