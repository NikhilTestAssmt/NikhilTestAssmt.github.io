import React, {Component} from 'react'
import './stocktableStyles.css'
import $ from 'jquery'

const URL = 'ws://stocks.mnet.website'

class StockTable extends Component{
  
 ws = new WebSocket(URL)

  constructor(props){
      super(props)

      this.state = {   
        check: '',   
        message: []
      }

  }  

  

  componentDidMount(){
      this.ws.onopen = () => {
        console.log('connected')
      }

      this.ws.onmessage = evt => {
        // on receiving a message, add it to the list of messages    
        this.setState( {
            message: JSON.parse(evt.data)
        });
      }

      this.ws.onclose = () => {
        console.log('disconnected')
      }
  }

  componentDidUpdate(prevProps,prevState){
    const current = this.state.message;
    const previous = prevState.message;

    for ( let i=0; i<current.length; i++){
        this.nameC = current[i][0]
        this.priceC = current[i][1]
        for (let j=0; j<previous.length; j++){
            this.nameP = previous[j][0]
            this.priceP = previous[j][1]
            if( this.nameC === this.nameP ){

                if( this.priceC === this.priceP){
                    console.log(this.priceC,this.priceP)
                    $('.chg-color').css('color','white');
                    
                } else if( this.priceC > this.priceP ){
                    console.log(this.priceC,this.priceP,"greator case")
                    $('.chg-color').css('color','green');
                } else {
                    console.log(this.priceC,this.priceP,"less case")
                    $('.chg-color').css('color','red');
                }

            } 
        }
    }
   
  }

  render(){

    const dataItems = this.state.message.map( ([name,price]) => 
           <tr className="t-r-2">
                <td id="t-d-1" key={name}>{name}</td>
                <td id="t-d-1" className="chg-color" key={price}>{price.toFixed(2)}</td>  
                <td id="t-d-1">few seconds ago</td>
           </tr>
    );

    return (
        <div className="row2 col-lg-12 col-md-12 col-sm-12">   
          <table>
               <tbody>
                   <tr className="t-r-1">
                      <td id="t-d-1">Name</td>
                      <td id="t-d-1">Price</td>
                      <td id="t-d-1">Last Update</td>
                   </tr>
                   {dataItems}
               </tbody>
           </table>
         </div>
        )
  }
}

export default StockTable