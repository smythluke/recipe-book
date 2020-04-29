import React from 'react';
import App from './App';
import { AmplifyAuthenticator, AmplifySignUp } from '@aws-amplify/ui-react';

function AppWithAuth() {
	return(
		<AmplifyAuthenticator usernameAlias="email">
			<AmplifySignUp formFields={[{type:'email', label: 'Email Address *', required: true}, {type:'password', label: 'Password *', required: true}]}  usernameAlias="email" slot="sign-up"></AmplifySignUp>
			<App />
		</AmplifyAuthenticator>
	);
}

export default AppWithAuth;
