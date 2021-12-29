import React from 'react';
import FormInput from './components/FormInput';
import List from './components/List';
import Footer from './components/Footer';
import { DataProvider } from './components/DataProvider';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>Shoping List /To Do List</h1>
        <h4>
          What item do you need? Please make a Digital List by Using this form.
        </h4>
        <h4>
          Type item name and Price (optional) of the item. You Can use a comma
          to seperate Price of the Product <br></br>
        </h4>

        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
