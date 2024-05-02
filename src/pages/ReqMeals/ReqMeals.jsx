import Swal from "sweetalert2";
import useReqMeal from "../../hooks/useReqMeal";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const ReqMeals = () => {
  const [requestedMeals] = useReqMeal();
  console.log(requestedMeals);
  const {user} = useAuth()

  const axiosPublic = useAxiosPublic()

  // const handleDelete = id => {
  //   console.log(id);

  //   Swal.fire({
  //     title: "Are You Sure? You  want to delete!",
  //     text: "",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, Delete!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axiosPublic.delete(`/requestedMeals/${id}`)
  //   .then(res => {
  //     console.log(res.data);
  //     // if(res.data.deletedCount){
  //     //   Swal.fire({
  //     //     position: "center",
  //     //     icon: "success",
  //     //     title: `Deleted  Successfully`,
  //     //     showConfirmButton: false,
  //     //     timer: 1500,
  //     //   });
  //     //   // refetch()
        
  //     // }
  //   })
  //     }
  //   });
    
  // }
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are You Sure? You want to delete!",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/requestedMeals/${id}?email=${user.email}`) // Pass user's email as a parameter
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: `Deleted Successfully`,
                showConfirmButton: false,
                timer: 1500,
              });
              // refetch(); // Refetch the requested meals after deletion
            }
          })
          .catch((error) => {
            console.error("Error deleting meal:", error);
            // Handle error if deletion fails
          });
      }
    });
  };

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
              <th>status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {requestedMeals.map((meal, idx) => (
              <tr key={meal._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={meal.image} alt={meal.title} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{meal.title}</div>
                      <div className="text-sm opacity-50">{meal.email}</div>
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
                <td>pending</td>
                <th>
                  <button onClick={() => handleDelete(meal._id)} className="btn btn-ghost btn-xs">cancel</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReqMeals;

