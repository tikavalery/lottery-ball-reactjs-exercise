import React, { Component } from "react";
import LotteryBall from "./LotteryBall"
import "./LotteryCard.css";

class LotteryCard extends Component{
     static defaultProps = {
         title: "Lotto",
         numBalls: 6,
         maxNum: 40
    }
    constructor(props) {
        super(props) 
      
      
        this.state = {
               nums:Array.from({length:this.props.numBalls}),
                
        }
        this.handleClick = this.handleClick.bind(this)
     
        
    }
    generate() {
        this.setState(curState => ({
            nums:curState.nums.map(n =>Math.floor(Math.random() * this.props.maxNum) + 1)
        }))
        
    }
    handleClick() {
        this.generate();
 }

    render() {
   
        return (
             <div >
                 <h1 className="Lottery-card-title">{this.props.title}</h1>
                
                <div className="Lottery-card-ball-div">
                  {this.state.nums.map(n=> <LotteryBall num ={n}/>)}
                </div>
               <div className="Lottery-card-button"><button onClick={this.handleClick} >Generate</button></div>
                
            </div>
        )
    }
}

export default LotteryCard