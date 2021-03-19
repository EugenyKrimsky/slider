import React from 'react';
import Card from './Card';
import left from './img/left.svg';
import right from './img/right.svg';

export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            cards: this.props.arrWeather.map(card => <Card card={card}/>),
            style: {
                left: 0
            }
        }
    }

    moveLeft() {
        if (this.state.style.left < 0){
            this.setState((state) => ({
                style: {
                    left: state.style.left + 202,
                }
            }))
        }
    }
    moveRight() {
        if (this.state.style.left > -1404){
            this.setState((state) => ({
                style: {
                    left: state.style.left - 202,
                }
            }))
        }
    }

    render() {
        return (
        <div className="container">
            <img src={left} onClick={this.moveLeft.bind(this)} className="btn" />
            <div className="slider">
                <div style={this.state.style} className="slider-line"> 
                    {this.state.cards}                   
                </div>
            </div>
            <img src={right} onClick={this.moveRight.bind(this)} className="btn" />
        </div>
        )
    }
}