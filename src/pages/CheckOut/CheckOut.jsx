import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const pack = useLoaderData()
  return (
    <div>
      {
        pack?.map(item => {
            return (
                <div key={item._id}>
                    <h2>{item.name}</h2>
                </div>
            )
        })
      }
    </div>
  );
};

export default CheckOut;