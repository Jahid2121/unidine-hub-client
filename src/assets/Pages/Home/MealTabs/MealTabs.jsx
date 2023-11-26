import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const MealTabs = () => {
    const [tabIndex, setTabIndex] = useState(0)
  return (
    <div className='flex justify-center'>
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
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default MealTabs;