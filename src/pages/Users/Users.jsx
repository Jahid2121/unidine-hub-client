import useUsers from "../../hooks/useUsers";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Users = () => {
  const [users, refetch] = useUsers();
  const axiosSecure = useAxiosSecure();
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then((res) => {
          if (res.data.modifiedCount) {
            refetch()
            Swal.fire({
              title: "Updated!",
              text: `${user.name} is Admin Now.`,
              icon: "success",
            });
          }
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
              <th>Email</th>
              <th>Role</th>
              <th>Subscription</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                   { user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn">
                    Make Admin
                    </button>}
                </td>
                <td>{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
