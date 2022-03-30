import React, {Component} from 'react';
import data from '../data.json'

export default class Textos extends Component{
    render(){
        return(
            //importo el json con un contador
            <>
                <h1 className='historia'> {data[this.props.contador]}</h1>
            </>
        )
    }

}
