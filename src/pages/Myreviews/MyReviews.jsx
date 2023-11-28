import useReview from "../../hooks/useReview";

const MyReviews = () => {
  const [reviews] = useReview();
  console.log(reviews);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>count</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {reviews.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">

                    <div>
                      <div className="font-bold">{item.title}</div>
                      <div className="text-sm opacity-50">{item.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Reviews: {item.reviews}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Likes: {item.likes}
                  </span>
                </td>
                <td className="">view Meal</td>
                <th className="flex flex-col">
                  <button className="btn btn-ghost btn-xs">edit</button>
                  <button className="btn btn-ghost btn-xs">delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
