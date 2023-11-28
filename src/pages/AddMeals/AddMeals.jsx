import { FaUtensilSpoon } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const AddMeals = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const [formattedDate, setFormattedDate] = useState(null);
  const { user } = useAuth();


  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    setFormattedDate(formattedDate);
  }, []);

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

const onSubmit = async (data) => {
    console.log(data);

    const mealData = {
        title: data.title,
        category: data.category,
        image: data.image,
        description: data.description,
        price: parseFloat(data.price),
        rating: parseInt(data.rating),
        postTime: data.postTime,
        likes: parseInt(data.likes),
        reviews: parseInt(data.reviews),
        name: data.name,
        email: data.email,
      };
      console.log(mealData);
  
      const mealRes = await axiosSecure.post("/meal", mealData)

      console.log(mealRes.data);
      if (mealRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.title} is added to the meal.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
  };

  return (
    <form className="text-black" onSubmit={handleSubmit(onSubmit)}>

      {/* recipe name */}
      <div className="form-control w-full my-6">
        <label className="label">
          <span className="label-text">Recipe Name*</span>
        </label>
        <input
          type="text"
          placeholder="Meal Title"
          {...register("title", { required: true })}
          required
          className="input input-bordered w-full"
        />
      </div>

      <div className="flex gap-6">
            {/* category */}
            <div className="form-control text-black w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="breakfast"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="breakfast">breakfast</option>
                <option value="lunch">lunch</option>
                <option value="dinner">dinner</option>
              </select>
            </div>

            {/* image */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">image*</span>
              </label>
              <input
                type="text"
                placeholder="image"
                {...register("image", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>


          {/* ingredients */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">ingredients</span>
            </label>
            <textarea
              {...register("ingredients")}
              className="textarea textarea-bordered h-24"
              placeholder="ingredients"
            ></textarea>
          </div>

          {/* description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">description</span>
            </label>
            <textarea
              {...register("description")}
              className="textarea textarea-bordered h-24"
              placeholder="description"
            ></textarea>
          </div>


          <div className="flex gap-6">
            {/* recipe name */}
            <div className="form-control w-full my-6">

              <input
                type="number"
                
                defaultValue="0"
                {...register("rating", { required: true })}
                required
                hidden
                className="input input-bordered w-full"
              />
            </div>

            {/* price  */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">price*</span>
              </label>
              <input
                type="number"
                placeholder="price"
                {...register("price", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>



          <div className="flex gap-6">
            {/* recipe name */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Post date</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={formattedDate}
                {...register("postTime", { required: true })}
                required

                readOnly
                className="input input-bordered w-full"
              />
            </div>

            {/* likes  */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">likes</span>
              </label>
              <input
                type="number"
                placeholder="0"
                defaultValue='0'
                {...register("likes", { required: true })}
                required
                readOnly
                className="input input-bordered w-full"
              />
            </div>
          </div>
          
          <div className="flex gap-6">
             {/* reviews  */}
             <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">reviews</span>
              </label>
              <input
                type="number"
                placeholder="0"
                defaultValue='0'
                {...register("reviews", { required: true })}
                required
                readOnly
                className="input input-bordered w-full"
              />
            </div>
           
          </div>




          <div className="flex gap-6">
             {/* name  */}
             <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input
                type="text"
                defaultValue={`${user?.displayName}`}
                {...register("name", { required: true })}
                required
                readOnly
                className="input input-bordered w-full"
              />
            </div>

            {/*  email */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">email</span>
              </label>
              <input
                type="text"
                defaultValue={`${user?.email}`}
                {...register("email", { required: true })}
                required
                readOnly
                className="input input-bordered w-full"
              />
            </div>

           
          </div>




      <button type="submit" className="btn">
        Add Item <FaUtensilSpoon className="ml-4"></FaUtensilSpoon>
      </button>
    </form>
  );
};

export default AddMeals;
