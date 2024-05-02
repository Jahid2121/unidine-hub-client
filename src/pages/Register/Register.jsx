import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../components/providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin";
import loginSVg from "../../assets/login-bg.svg"
import { motion } from "framer-motion";
const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userData = {
            name: data.name,
            email: data.email
          }
          axiosPublic.post('/users', userData)
          .then(res => {
            if(res.data.insertedId){
              reset()
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
              
            }
          })
          
          
        })
        .catch(error => {
          console.error(error);
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-16 flex md:flex-row flex-col-reverse">
      <img className="flex-grow" src={loginSVg} alt="" />
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <h2 className="  text-3xl font-semibold mb-4">Join Us </h2>
        {/* name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            {...register("name", { required: true })}
            className="input input-bordered"
          />
          {errors.name && (
            <span className="text-red-800">name is required</span>
          )}
        </div>

        {/* photo URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="photo url"
            name="photoURL"
            {...register("photoURL", { required: true })}
            className="input input-bordered"
          />
          {errors.photoURL && (
            <span className="text-red-800">photoURL is required</span>
          )}
        </div>
        {/* photo URL */}


        {/* email */}
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

        {/* password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <input
            type="password"
            name="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
            })}
            placeholder="password"
            className="input input-bordered"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-800">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-800">
              Password must be 6 or more characters
            </p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-red-800">Maximum password length exceeded</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-800">
              Password must be include at least one uppercase letter, one
              lowercase letter, one special character, and one number.
            </p>
          )}
        </div>
        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="form-control mt-6">
          <input
            value="Register"
            className="btn bg-customSalmon text-white font-bold text-2xl"
            type="submit"
            name=""
            id=""
          />
        </motion.div>
        <p className="font-medium text-center">
          Already have an account{" "}
          <motion.button whileHover={{ scale: 1.1 }}>
  <Link className="text-customSalmon font-medium" to="/login">
    Login
  </Link>
</motion.button>
        </p>
      </form>
          <div className="absolute bottom-72 right-1 md:bottom-28 md:right-20">
          <SocialLogin />
          </div>
    </div>
  );
};

export default Register;
