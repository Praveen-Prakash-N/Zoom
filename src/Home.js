import React, { Component } from 'react';
import {OBJ} from './Schedule'; 
import { Input, Button, IconButton } from '@material-ui/core';
import "./Home.css"
 


class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: '',
		}
		console.log(OBJ);
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	

	

// 	create = () => {
// 		var element = document.getElementById("time").value;
  
//   if (element == "") {
//   alert("Please Enter Time");
//     return false;  
//   }
//   else {
  
//   // get system local time
//   var d = new Date();
//   var m = d.getMinutes();
//   var h = d.getHours();
//   if(h == '00') {h = 24}
  
//  // var currentTime = h+"."+m;
//   var currentTime = new Date().getTime();
//   console.log(currentTime);
 
//   // get input time
//   var time = element.split(":");
//   var hour = time[0];
//   if(hour == '0') {hour = 24}
//   var min = time[1];
  
//  // var inputTime = hour+"."+min;
//  var inputTime = new Date("07/07/2021 10:40:00 AM").getTime()
//   console.log(inputTime);
  
//   if (currentTime === inputTime) {
//     alert("You can use above link");
//   } 
//   else {
// 	let obj = {};
// 	obj.url = document.getElementById("url").value;
// 	let jsonObj1 = JSON.stringify(obj);
// 	console.log(jsonObj1);
// 	var join=()=> {
// 		var jsonObj = JSON.parse(jsonObj1);
// 		console.log(jsonObj);
// 		if (this.state.url !== "") {
// 			var url = this.state.url.split("/")
// 			window.location.href = `/${url[url.length-1]}`
// 		} else {
// 			var url = Math.random().toString(36).substring(2, 7)
// 			window.location.href = `/${url}`
// 		}
// 	}
// 	var totalTime = inputTime - currentTime;
// 	console.log(totalTime);
// 	setTimeout(join, totalTime);
	
//   }
//     }
// 	}

// newArray = this.state.obj.Time.filter((el, index) => {
// 	return el.id == "fgh" && 
// 	el.meetingTime == 4.00
// })

// newArray = this.state.obj.Time.filter(Time => Time.id==="fgh")

	meet = () => {
		var newArray = (function(value) {
			return OBJ.Meeting1.filter = "fgh"
		})
		console.log(newArray);
	}

		join = () => {
		
		
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
	} 
}


	render() {
		return (
			<div className="container2">
				
				<div>
					<h1 style={{ fontSize: "45px" }}>Video Meeting</h1>
					<p style={{ fontWeight: "200" }}>Video conference website that lets you stay in touch with all your friends.</p>
				</div>

				<div style={{
					background: "white", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "100px"
				}}>
					<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Start or join a meeting</p>
					<Input placeholder="URL" onChange={e => this.handleChange(e)} />
					
					<Button variant="contained" color="primary" onClick={this.join} style={{ margin: "20px" }}>Go</Button>
					<Button variant="contained" color="primary" onClick={this.meet} style={{ margin: "20px" }}>Meet</Button>
				</div>
				{/* <div style={{
					background: "white", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "100px"
				}}>
				<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Meeting</p>
				<span>Time</span>
    			<input type="time" id="time" required></input>
				<input type="text" id="url" required />
					<Button variant="contained" color="primary" onClick={this.create} style={{ margin: "20px" }}>Create</Button>
				</div> */}
			</div>
		)
	}
}

export default Home;