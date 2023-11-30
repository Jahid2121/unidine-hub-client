import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const EditProfile = () => {
  const { updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()
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

      axiosSecure.put(`/users?email=${user?.email}`, userData)
      .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User updated successfully",
            showConfirmButton: false,
            timer: 1500
          });
          
        }
      })
      .catch(error => {
        console.log(error);
      })
      
      
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
    defaultValue={user?.displayName}
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
    defaultValue={user?.photoURL}
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
    defaultValue={user.email}
    name="email"
    {...register("email", { required: true })}
    className="input input-bordered"
  />
  {errors.email && (
    <span className="text-red-800">Email is required</span>
  )}
</div>





<div className="form-control mt-6">
  <input
    value="Update User"
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
