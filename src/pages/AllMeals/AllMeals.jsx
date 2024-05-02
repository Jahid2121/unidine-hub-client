import { FaPen, FaTrash } from "react-icons/fa";
import useMeal from "../../hooks/useMeal";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllMeals = () => {
  const [meals, refetch] = useMeal();
  const axiosSecure = useAxiosSecure()
  console.log(meals);
  const handleDelete = id => {
    Swal.fire({
      title: "Are You Sure? You  want to delete!",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/meal/${id}`)
    .then(res => {
      console.log(res.data);
      if(res.data.deletedCount){
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Deleted  Successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch()
        
      }
    })
      }
    });
    
  }

  
  return (
    <div className="">
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
              <Link to={`/meal/${meal._id}`}>
              <td className="hover:text-customGreen hover:link-hover">View Details</td>
              </Link>
              <td  className="text-xl  text-gray-700">
                 <Link to={`/updateMeal/${meal._id}`}>
                 <button className="mb-3"><FaPen /></button></Link>
                  <br />
                  <span className="text-xl text-red-700">
                    <button onClick={() => handleDelete(meal._id)}><FaTrash /></button>
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
