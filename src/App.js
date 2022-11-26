import './App.css';
import foodsList from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';

function App() {
  const [foods, setFood] = useState(foodsList);

  return (
    <div className="App">
      <AddFoodForm />

      <Divider>Food List</Divider>
      {foods.map((food) => {
        return <FoodBox food={food} />;
      })}
    </div>
  );
}
export default App;
