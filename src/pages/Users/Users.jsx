import { FaUserCircle } from "react-icons/fa";
import useUsers from "../../hooks/useUsers";

const Users = () => {
  const [users] = useUsers();
  console.log(users);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>User</th>
              <th>Action</th>
              <th>Subscription</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">

                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">{item.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                    <button className="btn">Make Admin</button>
                </td>
                <td>Subscribed</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
