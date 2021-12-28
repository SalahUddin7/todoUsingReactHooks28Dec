import React from 'react';
import FormInput from './components/FormInput';
import List from './components/List';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>

      <FormInput />
      <List />
      <Footer />
    </div>
  );
}

export default App;
