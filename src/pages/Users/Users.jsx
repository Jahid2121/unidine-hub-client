import useUsers from "../../hooks/useUsers";

const Users = () => {
    const [users] = useUsers()
    console.log(users);
  return (
    <div>
      <h2> {users.length}</h2>
    </div>
  );
};

export default Users;