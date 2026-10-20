import { Link } from "react-router";
import { signInUser } from "../services/services";

export default function SignupForm() {

  const handleSignUp = async (formData) => {
    const user = Object.fromEntries(formData);
    console.log(user)
    const data = await signInUser(user)

    console.log(data)
   

  }
  return (
    <div className="form">
      <h1 >Signup</h1>
      <form action={handleSignUp}>
        <input type="text" placeholder="name" name="name" />
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">Signup</button>
      </form>

      <Link to="/">Already have an account? Login</Link>
    </div>
  );
}
