import { FaTrash, FaUpload } from "react-icons/fa";
import useMeal from "../../hooks/useMeal";

const AllMeals = () => {
  const [meals] = useMeal();
  // console.log(meals);

  const handleUpdate = (meal) => {
    console.log('Update');
  }
  return (
    <div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>FeedBack</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {meals.map((meal, idx) => (
            <tr key={meal._id}>
              <th>{idx + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div>{meal.title}</div>
                    <div className="font-bold">{meal.name}</div>
                  </div>
                </div>
              </td>
              <td>
                  Reviews: {meal.reviews}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Likes: {meal.likes}
                  </span>
                </td>
              <td className="hover:text-customGreen hover:link-hover">View Details</td>
              <td onClick={() => handleUpdate(meal)} className="text-xl  text-customGreen">
                 <button className="mb-3"><FaUpload /></button>
                  <br />
                  <span className="text-xl text-red-700">
                    <FaTrash />
                  </span>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllMeals;
