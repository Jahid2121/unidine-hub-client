import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const EditProfile = () => {
  const { updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    updateUserProfile(data.name, data.photoURL)
    .then(() => {
        console.log('user updated');
      const userData = {
        name: data.name,
        email: data.email
      }

    //   axiosSecure.post('/users', userData)
    //   .then(res => {
    //     if(res.data.insertedId){
    //       reset()
    //       Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: "User created successfully",
    //         showConfirmButton: false,
    //         timer: 1500
    //       });
    //       navigate('/')
          
    //     }
    //   })
      
      
    })
    .catch(error => {
      console.error(error);
    })
  };
  return <div>

<form onSubmit={handleSubmit(onSubmit)} className="card-body">

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
{/* <div className="form-control">
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
</div> */}


<div className="form-control mt-6">
  <input
    value="Register"
    className="btn btn-primary"
    type="submit"
    name=""
    id=""
  />
</div>

</form>
  </div>;
};

export default EditProfile;
