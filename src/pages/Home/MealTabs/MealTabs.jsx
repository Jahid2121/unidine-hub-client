import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMeal from '../../../hooks/useMeal';
import MealTab from '../../../components/MealTab/MealTab';
import { Link } from 'react-router-dom';


const MealTabs = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [meals] = useMeal()
    const breakfast = meals.filter(item => item.category === 'breakfast')
    const lunch = meals.filter(item => item.category === 'lunch')
    const dinner = meals.filter(item => item.category === 'dinner')
    
  return (
        <div className='bg-custom-background-image bg-fixed'>
        <SectionTitle heading="Meals" subHeading="Meals category" />
       <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <div className='flex justify-center md:font-medium md:text-2xl'>
    <TabList>
      <Tab>All</Tab>
      <Tab>Breakfast</Tab>
      <Tab>Lunch</Tab>
      <Tab>Dinner</Tab>
    </TabList>

    </div>
    <TabPanel>
    <MealTab items={meals} />
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
  <Link to="/meals" className='btn bg-customSalmon hover:bg-customSalmon hover:font-bold text-white flex mx-auto my-8'>See All</Link>
    </div>
  );
};

export default MealTabs;