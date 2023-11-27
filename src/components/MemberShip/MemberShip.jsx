import { Link } from "react-router-dom";
import useMembership from "../../hooks/useMembership/useMembership";
import Btn from "../Btn";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaMedal } from "react-icons/fa";

const MemberShip = () => {
  const { isPending, isError, error, memberShipData } = useMembership();

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <section className="py-16 bg-gray-200">
      <div className="text-center">
        <SectionTitle heading="package" subHeading="Membership Packages" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memberShipData.map((pack) => {
            
            return (
              <div key={pack.id} className="bg-white p-6 rounded-lg shadow">
                <img src={pack.image} className="w-44 flex mx-auto mb-3" alt={pack.name} />
                <h3 className="text-xl font-bold mb-4">{pack.name}</h3>
                <p className="text-">Price: ${pack.price}</p>
                <p className="text-gray-700">Benefits: {pack.benefits}</p>
                <Link to={`/checkout/${pack.name}`}><Btn title="Upgrade Now"></Btn></Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MemberShip;
