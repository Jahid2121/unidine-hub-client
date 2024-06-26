import useAllReqMeal from "../../hooks/useAllReqMeal";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AllReqMeals = () => {
    const [allReqMeals] = useAllReqMeal()
    // console.log(allReqMeals);
    const axiosPublic = useAxiosPublic()
    
    const handleServe = id => {      
      axiosPublic.patch(`/requestedMeals/${id}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err))
    }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="md:table-lg table-xs ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th className="md:inline-block hidden">Chef</th>
              <th>status</th>
              <th></th>
            </tr>
          </thead>
          <tbody  >
            {/* row 1 */}
            {allReqMeals.map((meal, idx) => (
              <tr key={meal._id}>
                <th>{idx + 1}</th>
                <td >
                  <div className="flex items-center gap-3">
                    <div className="avatar md:inline-block hidden">
                      <div className="mask mask-squircle  w-12 h-12">
                        <img src={meal.image} alt={meal.title} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{meal.title}</div>
                      <div className="text-sm opacity-50">{meal.email}</div>
                    </div>
                  </div>
                </td>
                <td className="md:inline-block hidden">
                  {meal.name}
                </td>
                <td>{meal.status}</td>
                {
                  meal.status == "pending" && <th>
                  <button onClick={() => handleServe(meal._id)} className="btn btn-ghost btn-xs bg-customGreen hover:bg-green-900 text-white">serve</button>
                </th>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReqMeals;