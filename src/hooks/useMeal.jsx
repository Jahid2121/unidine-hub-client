import { useEffect, useState } from "react";

const useMeal = () => {
    const [meal, setMeal] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/meal')
        .then(res => res.json())
        .then(data => setMeal(data))
    }, [])

    return [meal];

};

export default useMeal;