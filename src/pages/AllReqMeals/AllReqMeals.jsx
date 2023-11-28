import useAllReqMeal from "../../hooks/useAllReqMeal";

const AllReqMeals = () => {
    const [allReqMeals] = useAllReqMeal()
    console.log(allReqMeals);
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
            {allReqMeals.map((meal, idx) => (
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
                  {meal.name}
                </td>
                <td>pending</td>
                <th>
                  <button className="btn btn-ghost btn-xs">serve</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReqMeals;