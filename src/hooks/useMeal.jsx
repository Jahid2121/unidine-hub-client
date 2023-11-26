import { useEffect, useState } from "react";

const useMeal = () => {
    const [meal, setMeal] = useState([]);
    useEffect(() => {
        fetch('meal.json')
        .then(res => res.json())
        .then(data => setMeal(data))
    }, [])

    return [meal];

};

export default useMeal;