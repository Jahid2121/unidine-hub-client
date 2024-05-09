import  { useState } from 'react';
import EditProfile from '../../../pages/Profile/EditProfile';
import CustomModal from '../../../components/CostomModal';
import { CiEdit } from 'react-icons/ci';
import useMemberShip from '../../../hooks/useMemberShip';
import useAuth from '../../../hooks/useAuth';
import AdminDashboard from '../../../components/AdminDashboard/AdminDashboard';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AdminHome = () => {
    const { user } = useAuth();
    const [[member]] = useMemberShip()
    const [isModalOpen, setModalOpen] = useState(false);
    
    const axiosSecure = useAxiosSecure()

    const {data: analytics} = useQuery({
      queryKey: ['admin-analytics'],
      queryFn: async() => {
        const response = await axiosSecure.get("/admin-analytics")
        return response.data;
      }
    })
  
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
  
    return (
     <div>
      {/* Profile section  */}
      <div className="text-center">
  
  <CustomModal
    isOpen={isModalOpen}
    onClose={closeModal}
    content={<EditProfile />}
  />
        <img
          className="rounded-full w-20 mb-4 mx-auto"
          src={user?.photoURL}
          alt={user?.displayName}
        />
      <button className="p-1 bg-white text-black rounded-md" onClick={openModal}><CiEdit /></button>
        <p className="text-gray-600">{user?.email}</p>
        <h2 className="text-lg font-semibold">
           Admin <br /> <span>{user?.displayName}</span>
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
        { member && <div>
          <img
            className="w-11"
            src={member?.image}
            alt="Silver Badge"
          />
          <p className="text-xs mt-1 text-gray-600">{member?.name}</p>
        </div>}
          </div>
      </div>


      {/* Dashboard section */}
      <AdminDashboard analytics={analytics} />
     </div>
    );
  };

export default AdminHome;