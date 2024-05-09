
import "./AdminDashboard.css"
const AdminDashboard = ({analytics}) => {
    console.log(analytics);
    // const {subscribers, meals, orders, revenue} = analytics
    return (
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 md:gap-0 ml-10 md:ml-0  justify-evenly mt-20 ">
                {/* meals card  */}
                <div className="bg-white dash-card w-56 hover:text-white hover:bg-customGreen text-start pl-5 pt-3 h-40"><h2 className="font-medium text-xl flex justify-between 
text-start">Meals 
<svg className="w-10 h-10 mr-4 hover:animate-spin svgIcon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32H8.6C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z"/></svg>
</h2>
<p className="text-5xl text-center mt-5 font-bold">{analytics?.meals}</p>
 </div>
 {/* Orders card */}
                <div className="bg-white dash-card w-56 hover:text-white hover:bg-customGreen  pl-5 pt-3 h-40">
                <h2 className="font-medium text-xl flex justify-between 
text-start">Orders
<svg  className="w-10 h-10 mr-4 hover:animate-spin svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
    <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
</h2> 
                
                <p className="text-5xl text-center mt-5 font-bold">{analytics?.orders}</p>
                </div>

                {/* Total revenue card */}
                <div className="bg-white dash-card w-56 hover:text-white hover:bg-customGreen  pl-5 pt-3 h-40"><h2 className="font-medium text-xl flex justify-between
text-start">Total Revenue <span>
    <svg className="w-10 hover:animate-spin svgIcon h-10 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z"/></svg>

</span> </h2> <p className="text-5xl text-center mt-5 font-bold">$ {analytics?.revenue}</p></div>

{/* Total Subscriber card */}
                <div className="bg-white dash-card w-56 hover:text-white hover:bg-customGreen  pl-5 pt-3 h-40"><h2 className="font-medium text-xl flex justify-between
text-start">Total Subs 
<svg className="md:hover:animate-spin svgIcon w-10 h-10 mr-4" fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M48 48h88c13.3 0 24-10.7 24-24s-10.7-24-24-24H32C14.3 0 0 14.3 0 32V136c0 13.3 10.7 24 24 24s24-10.7 24-24V48zM175.8 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-26.5 32C119.9 256 96 279.9 96 309.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4H149.3zm368 80c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3H421.3c-9.2 0-17.8 2.3-25.3 6.4c32.4 11.9 57.2 39.5 65.2 73.6h56.1zm-89.4 0c-8.6-24.3-29.9-42.6-55.9-47c-3.9-.7-7.9-1-12-1H280c-4.1 0-8.1 .3-12 1c-26 4.4-47.3 22.7-55.9 47c-2.7 7.5-4.1 15.6-4.1 24c0 13.3 10.7 24 24 24H408c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24zM464 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-80-32a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM504 48h88v88c0 13.3 10.7 24 24 24s24-10.7 24-24V32c0-17.7-14.3-32-32-32H504c-13.3 0-24 10.7-24 24s10.7 24 24 24zM48 464V376c0-13.3-10.7-24-24-24s-24 10.7-24 24V480c0 17.7 14.3 32 32 32H136c13.3 0 24-10.7 24-24s-10.7-24-24-24H48zm456 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H608c17.7 0 32-14.3 32-32V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v88H504z"/></svg>
</h2> <p className="text-5xl text-center mt-5 font-bold">{analytics?.subscribers}</p></div>
            </div>
        </div>
    );
};

export default AdminDashboard;