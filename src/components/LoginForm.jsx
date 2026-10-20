import { Link } from "react-router";
import { loginUser } from "../services/services";


function LoginForm() {

  const handleLogIn = async (formData) => {
    const credentials = Object.fromEntries(formData);
    console.log(credentials);
    const data = await loginUser(credentials)

    console.log(data)
   

  }
  return (
    <div className="form">
      <h1>Sign In</h1>
      <form action={handleLogIn}>
        <input type="test" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">Log In</button>
      </form>

      <Link to="/signup">Don't have an account? Sign Up</Link>
    </div>
  );
}



export default LoginForm