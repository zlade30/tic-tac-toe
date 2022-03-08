import React from 'react'
import congrats from './congrats.gif'

const style = {
	width: "500px",
	display: "grid",
    fontSize: "40px",
	fontWeight: "800",
	textAlign:'center',
	color: 'white',
	marginLeft: 50,
};


const Message = (props) => (
	<div style={{ display: 'flex', alignItems : 'center' }}>
		<div style={{ display: 'flex', alignItems : 'center' }}>
			{props.value?.includes('WINNER') ? <img src={congrats} style={{ position: 'absolute', width: 100, height: 100 }} /> : <div />}
			<h1 name={"msg"} style={style}>{props.value}</h1>
		</div>
	</div>
)

export default Message