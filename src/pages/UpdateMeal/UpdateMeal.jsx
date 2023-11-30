import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { FaUtensilSpoon } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Btn from "../../components/Btn";
import useMeal from "../../hooks/useMeal";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

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

        <button type="submit" className="btn flex mx-auto mb-16">
          <Btn title="Update Item" />{" "}
          <FaUtensilSpoon className="ml-4"></FaUtensilSpoon>
        </button>
      </form>
    </div>
  );
};

export default UpdateMeal;
