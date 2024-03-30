import React from 'react';

const ShowReviews = ({filterReview}) => {
    console.log(filterReview);
    return (
        <div>
            <h2>{filterReview.review}</h2>
        </div>
    );
};

export default ShowReviews;