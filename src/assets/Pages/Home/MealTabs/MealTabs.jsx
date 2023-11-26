import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useMeal from '../../../../hooks/useMeal';
import MealTab from '../../../../components/MealTab/MealTab';


const MealTabs = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [meal] = useMeal()
    const breakfast = meal.filter(item => item.category === 'breakfast')
    const lunch = meal.filter(item => item.category === 'lunch')
    const dinner = meal.filter(item => item.category === 'dinner')
    
  return (
        <>
        <SectionTitle heading="Meals" subHeading="Meals category" />
    <div>
       <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList>
      <Tab>All</Tab>
      <Tab>Breakfast</Tab>
      <Tab>Lunch</Tab>
      <Tab>Dinner</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
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
    </div>
    </>
  );
};

export default MealTabs;