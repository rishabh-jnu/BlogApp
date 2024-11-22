import React from 'react';
import { Login as LoginComponent } from '../components'; // Component name updated to start with an uppercase letter

function Login() {
  return (
    <div className="py-8">
      <LoginComponent /> {/* Use the corrected component name */}
    </div>
  );
}

export default Login;
