import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import {  useParams } from "react-router-dom";
import { FaUtensilSpoon } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Btn from "../../components/Btn";
import useMeal from "../../hooks/useMeal";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

const UpdateMeal = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useMeal();
  const { id } = useParams();

  const { isPending, data: meal = [] } = useQuery({
    queryKey: ["meal", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/meal/${id}`);
      return res.data;
    },
  });

  if(isPending){
    return <span className="loading text-customSalmon flex mx-auto mt-48 loading-spinner loading-lg"></span>
  }


  const { _id, title, category, image, ingredients, description, price } = meal;
  const onSubmit = async (data) => {
    console.log(data);

    const UpdatedMeal = {
      title: data.title,
      category: data.category,
      image: data.image,
      description: data.description,
    };
    console.log(UpdatedMeal);

    const mealRes = await axiosSecure.put(`/meal/${_id}`, UpdatedMeal);

    console.log(mealRes.data);
    if (mealRes.data.modifiedCount) {
      reset();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Meal is Updated Successfully.`,
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };
  return (
    <div>
      <SectionTitle heading="Update" subHeading={`Update ${title}`} />
      <form className="text-black" onSubmit={handleSubmit(onSubmit)}>
        {/* recipe name */}
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text text-3xl">Recipe Name*</span>
          </label>
          <input
            type="text"
            placeholder="Meal Title"
            {...register("title", { required: true })}
            required
            defaultValue={title}
            className="input input-bordered w-full text-xl"
          />
        </div>

        <div className="flex gap-6">
          {/* category */}
          <div className="form-control text-black w-full my-6">
            <label className="label">
              <span className="label-text text-3xl">Category*</span>
            </label>
            <select
              defaultValue={category}
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
              <span className="label-text text-3xl">image*</span>
            </label>
            <input
              type="text"
              defaultValue={image}
              placeholder="image"
              {...register("image", { required: true })}
              required
              className="input input-bordered w-full text-xl"
            />
          </div>
        </div>

        {/* ingredients */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-3xl">ingredients</span>
          </label>
          <textarea
            {...register("ingredients")}
            className="textarea textarea-bordered text-xl h-24"
            defaultValue={ingredients}
            placeholder="ingredients"
          ></textarea>
        </div>

        {/* description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-3xl">description</span>
          </label>
          <textarea
            {...register("description")}
            defaultValue={description}
            className="textarea text-xl textarea-bordered h-24"
            placeholder="description"
          ></textarea>
        </div>

        <div className="flex gap-6">
          {/* price  */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text text-3xl">price*</span>
            </label>
            <input
              type="text"
              placeholder="price"
              defaultValue={price}
              {...register("price", { required: true })}
              required
              className="input input-bordered w-full text-xl"
            />
          </div>
        </div>

        <motion.button type="submit"   style={{borderRadius: '0 30px 30px 30px'}} className=" mt-4 flex mx-auto mb-16 bg-customSalmon text-white px-4 py-2 ">
        <svg className="w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm224 64c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9s-12.5 14.4-22 14.4l-208 0c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z"/></svg>
        
         Update Meal
    </motion.button>
      </form>
    </div>
  );
};

export default UpdateMeal;
