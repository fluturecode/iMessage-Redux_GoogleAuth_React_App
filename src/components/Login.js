import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase.js";

function Login() {
	const signIn = () => {
		auth.sighInWithPopup(provider).catch((err) => alert.err.message);
	};

	return (
		<div className='login'>
			<div className='login__logo'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png'
					alt='iMessage logo'
				/>
				<h1>iMessage</h1>
			</div>
			<Button>Sign </Button>
		</div>
	);
}

export default Login;
