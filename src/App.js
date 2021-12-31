import React, { useState } from 'react';
import FormInput from './components/FormInput';
import List from './components/List';
import Footer from './components/Footer';
import { DataProvider } from './components/DataProvider';

function App() {
  const [allData, setAllData] = useState([]);
  const allDataHandlers = (data) => {
    setAllData(data);
  };

  return (
    <DataProvider>
      <div className="App">
        <h1>Shopping List /To Do List</h1>
        <h4>
          What item do you need? Please make a Digital List by Using this form.
        </h4>
        <h4>
          Type item name and Price (optional) of the item. You Can use a comma
          to seperate Price of the Product <br></br>
        </h4>

        <FormInput allDataHandlers={allDataHandlers} />
        <List allData={allData} />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
