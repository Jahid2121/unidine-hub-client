import { FaUtensilSpoon } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddMeals = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);

    
  };

  return (
    <div>
      <SectionTitle
        heading="add an item"
        subHeading="What's new?"
      ></SectionTitle>
      <div className="text-black">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                defaultValue="default"
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
              <label className="label">
                <span className="label-text">rating</span>
              </label>
              <input
                type="number"
                placeholder="0"
                defaultValue={0}
                {...register("rating", { required: true })}
                required
                disabled
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

          <button className="btn">
            Add Item <FaUtensilSpoon className="ml-4"></FaUtensilSpoon>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMeals;
