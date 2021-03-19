import React from 'react'

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: this.props.card,
        }
    }

    render() {
        const style = {
            width: '190px',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',

        };
        const font1 = {
            fontSize: '14px',
            color: '#a5a5a5',
        }
        const font2 = {
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#222222',
            marginBottom: '25px'
        }
        const font3 = {
            fontSize: '16px',
            color: '#222222',
            marginBottom: '10px'
        }
        const font4 = {
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#222222',
        }
        const svg = {
            marginBottom: '25px'
        }
        return (
            <div style={style}>
                <div style={font1}>{this.state.card.day}</div>
                <div style={font2}>{this.state.card.date}</div>
                <img style={svg} src={this.state.card.img}></img>
                <div style={font4}>{this.state.card.dayTemp}</div>
                <div style={font3}>{this.state.card.nightTemp}</div>
                <div style={font1}>{this.state.card.desc}</div>
            </div>
        )
    }
}