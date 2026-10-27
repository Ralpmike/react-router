import { Link, useNavigate } from "react-router";
import { loginUser } from "../services/services";
 import { ToastContainer, toast } from "react-toastify";
import { useProducts } from "../helper/useProducts";

function LoginForm() {
  let navigate = useNavigate();
  const {setUser} = useProducts();

  const handleLogIn = async (formData) => {
    const credentials = Object.fromEntries(formData);
    console.log(credentials);
    const data = await loginUser(credentials);

    if (data.message) {
      toast.error(data.message);
    }
    
    if (data.token) {
      toast.success("Logged In Successfully");
     setUser(data);
     setTimeout(() => navigate("/products"), 3000);
    } 
  };
  return (
    <div className="form">
      <h1>Sign In</h1>
      <form action={handleLogIn}>
        <input type="test" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">Log In</button>
      </form>

      <Link to="/signup">Don't have an account? Sign Up</Link>
      <ToastContainer />
    </div>
  );
}

export default LoginForm;
