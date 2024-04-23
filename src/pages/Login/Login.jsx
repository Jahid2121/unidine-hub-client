import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";
import loginSvg from "../../assets/login-bg.svg"
import { motion } from "framer-motion";

const Login = () => {
    const {logIn} = useAuth()
    const navigate = useNavigate();
    const location = useLocation()


    const from = location.state?.from?.pathname || '/'




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
                position: "center",
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
    <div className="mt-16 flex md:flex-row flex-col">

      <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
        <h2 className="flex justify-center text-3xl font-semibold mb-4">Login </h2>
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
        <div className="" >
        </div>
        <motion.div   whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}  className="form-control mt-6">
          <input
            value="Login"
            className="bg-customSalmon p-1 rounded-xl text-2xl font-semibold text-white"
            type="submit"
            name=""
            id=""
          />


          
        </motion.div>

    <div className="flex justify-center">
    <SocialLogin />
    </div>
        <p className="font-medium text-center">New User? Join us Now <motion.div  whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} ><Link className="text-customSalmon font-medium" to="/register">Register</Link></motion.div></p>
      </form>
      <img src={loginSvg} alt="" className="flex-grow" />
    </div>
  );
};

export default Login;
