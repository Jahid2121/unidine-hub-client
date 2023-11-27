import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";



const Login = () => {
    const {logIn, googleLogin} = useAuth()
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'


    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result.user);
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "User logged in successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error);
        })
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        console.log(data);
        logIn(data.email, data.password)
        .then(data => {
            console.log(data.user);
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "User logged in successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(from, {replace: true})
        })
        .catch(err => {
            console.error(err);
        })
       
    
      };
    


  return (
    <div className="mt-16">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            {...register("email", { required: true })}
            className="input input-bordered"
          />
          {errors.email && (
            <span className="text-red-800">Email is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <input
            type="password"
            name="password"
            {...register("password", {
              required: true,

            })}
            placeholder="password"
            className="input input-bordered"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-800">Password is required</p>
          )}
         
        </div>
        <div onClick={handleGoogleLogin}>
        <FaGoogle />
        </div>
        <div className="form-control mt-6">
          <input
            value="Register"
            className="btn btn-primary"
            type="submit"
            name=""
            id=""
          />
        </div>
        <p className="font-medium text-center">New User? Join us Now <Link className="text-customSalmon font-medium" to="/register">Register</Link></p>
      </form>
    </div>
  );
};

export default Login;
