
const ShowReviews = ({filterReview, reFetchReview}) => {
    const {review, name, date, userImg} = filterReview
    return (
        <div>
            <div className="divider"></div>
            <div className="flex gap-3 md:gap-10 mt-5  md:mt-8">
            <img src={userImg} className="bg-black rounded-full md:w-20 w-10 h-10 md:h-20" alt="" />
            <div className="">
            <div className="flex gap-5">
            <p className="font-bold">{name}</p>
            <p>{date}</p>
            </div>
            <p>{review}</p>
            </div>
        </div>
        <div className="divider"></div>
        </div>
    );
};

export default ShowReviews;