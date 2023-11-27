import useAuth from "../../hooks/useAuth";

const Profile = () => {
    const {user} = useAuth()
  return (
      <div className="text-center mt-20">
        <img className="rounded-full w-20 mb-4 flex mx-auto" src={user?.photoURL} alt="" />
        <p>{user?.email}</p>
        <h2>  Welcome  <span>{user?.displayName}</span></h2>
        <p>Your Badge </p>
        <img className="w-11 flex mx-auto" src={"https://i.ibb.co/T2pZhJ0/medal-1.png"} alt="" />
        
        
    </div>
  );
};

export default Profile;