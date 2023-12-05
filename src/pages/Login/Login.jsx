import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin";



const Login = () => {
    const {logIn, googleLogin} = useAuth()
    const navigate = useNavigate();
    const location = useLocation()
    const axiosPublic = useAxiosPublic()


    const from = location.state?.from?.pathname || '/'


    // const handleGoogleLogin = () => {
    //     googleLogin()
    //     .then(result => {
    //         console.log(result.user);
    //         const userData = {
    //           name: result.user?.displayName,
    //           email: result.user?.email,

    //         }
    //         axiosPublic.post('/users', userData)
    //         .then(res => {
    //           if(res.data){
  
    //             Swal.fire({
    //                 position: "center",
    //                 icon: "success",
    //                 title: "User logged in successfully",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               });
    //               // navigate(from, {replace: true})
                
    //           }
              
    //         })
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // }

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
      <form onSubmit={handleSubmit(onSubmit)} className="card-body w-1/2 mx-auto">
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
        {/* <button onClick={handleGoogleLogin} className="hover:bg-custom-yellow p-3 mt-8 mr-5 border text-2xl rounded-full">
        <svg stroke="currentColor" fill="currentColor"viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z"></path>
      </svg>
    </button> */}
    <SocialLogin />
        </div>
        <div className="form-control mt-6">
          <input
            value="Login"
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
