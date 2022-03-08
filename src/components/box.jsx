import React from 'react'
import zoom from './zoom.png'
import plexoo from './plexoo.png'

const style = {
	border: "3px solid black",
	fontSize: "40px",
}   


/*
Box.jsx is the discrete unit structure of the board ui.
It is made a button.
When its pressed it will call the function passed from porps.
*/

const renderBox = (props) => {
	if (props.value === 'O') {
		return <img name={props.name} onClick={props.onClick} src={plexoo} style={{ width: 270, height: 160, border: '1px solid black', backgroundColor: 'white' }} />
	} else if (props.value === 'X') {
		return <img name={props.name} onClick={props.onClick} src={zoom} style={{ width: 270, height: 160, border: '1px solid black', backgroundColor: 'white' }} />
	} else {
		return <div name={props.name} onClick={props.onClick} style={{ width: 270, height: 160, border: '1px solid black', backgroundColor: 'white' }} />
	}
}

const Box = (props) => renderBox(props)

export default Box
