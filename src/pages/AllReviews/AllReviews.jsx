import { FaTrashAlt } from "react-icons/fa";
import useAllReviews from "../../hooks/useAllReviews";
import { Link } from "react-router-dom";

const AllReviews = () => {
    const [allReviews] = useAllReviews()
    console.log(allReviews);
  return (
    <div>
     <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allReviews.map((meal, idx) => (
              <tr key={meal._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{meal.title}</div>
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
                <td>
                {/* <Link to={`/meal/${meal._id}`}> */}
              <td className="hover:text-customGreen hover:link-hover">View Details</td>
              {/* </Link> */}
                </td>
                <td> <button className="btn btn-ghost  text-2xl"><FaTrashAlt /></button></td>
                <th>
                 
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReviews;