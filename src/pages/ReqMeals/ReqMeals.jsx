import useReqMeal from "../../hooks/useReqMeal";

const ReqMeals = () => {
  const [requestedMeals] = useReqMeal();
  console.log(requestedMeals);
  const {
    _id,
    title,
    category,
    image,
    price,
    likes,
    reviews,
    adminName,
    adminEmail,
  } = requestedMeals;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
               
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {requestedMeals.map((meal,idx) => (
              <tr key={meal._id}>
                <th>
                  {idx+1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={meal.image}
                          alt={meal.title}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{meal.name}</div>
                      <div className="text-sm opacity-50">{meal.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {/* Zemlak, Daniel and Leannon */}
                  Reviews: {meal.reviews}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Likes: {meal.likes}
                  </span>
                </td>
                <td>pending</td>
                <th>
                  <button className="btn btn-ghost btn-xs">cancel</button>
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
