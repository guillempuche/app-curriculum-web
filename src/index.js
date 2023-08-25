import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import { PrivacyPolicyScreen } from './privacy_policy_screen';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/privacy" element={<PrivacyPolicyScreen />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

function Home() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate('/privacy');
		console.log('home');
	}, [navigate]);

	return null;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
