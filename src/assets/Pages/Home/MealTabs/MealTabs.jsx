import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useMeal from '../../../../hooks/useMeal';
import MealTab from '../../../../components/MealTab/MealTab';
import { Link } from 'react-router-dom';


const MealTabs = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [meal] = useMeal()
    const breakfast = meal.filter(item => item.category === 'breakfast')
    const lunch = meal.filter(item => item.category === 'lunch')
    const dinner = meal.filter(item => item.category === 'dinner')
    
  return (
        <>
        <SectionTitle heading="Meals" subHeading="Meals category" />
       <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <div className='flex justify-center'>
    <TabList>
      <Tab>All</Tab>
      <Tab>Breakfast</Tab>
      <Tab>Lunch</Tab>
      <Tab>Dinner</Tab>
    </TabList>

    </div>
    <TabPanel>
    <MealTab items={meal} />
    </TabPanel>
    <TabPanel>
      <MealTab items={breakfast} />
    </TabPanel>
    <TabPanel>
      <MealTab items={lunch} />
    </TabPanel>
    <TabPanel>
      <MealTab items={dinner} />
    </TabPanel>
  </Tabs>
  <Link to="/meals" className='btn bg-customSalmon text-white flex mx-auto my-8'>See All</Link>
    </>
  );
};

export default MealTabs;