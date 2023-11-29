import useAuth from "../../hooks/useAuth";
import useMemberShip from "../../hooks/useMemberShip";

const Profile = () => {
  const { user } = useAuth();
  const [[member]] = useMemberShip()
  console.log(member.image);
  return (
   <div className="text-center">
      <img
        className="rounded-full w-20 mb-4 mx-auto"
        src={user?.photoURL}
        alt={user?.displayName}
      />
      <p className="text-gray-600">{user?.email}</p>
      <h2 className="text-lg font-semibold">
        Welcome <span>{user?.displayName}</span>
      </h2>
      <p className="mt-2">Your Badges </p>
      <div className="flex justify-center items-center mt-2">
        {/* Bronze Badge */}
        <div className="mr-4">
          <img
            className="w-11"
            src={"https://i.ibb.co/T2pZhJ0/medal-1.png"}
            alt="Bronze Badge"
          />
          <p className="text-xs mt-1 text-gray-600">Bronze</p>
        </div>

        {/* Silver Badge */}
        <div>
          <img
            className="w-11"
            src={member?.image}
            alt="Silver Badge"
          />
          <p className="text-xs mt-1 text-gray-600">{member.name}</p>
        </div>
        </div>
    </div>
  );
};

export default Profile;
