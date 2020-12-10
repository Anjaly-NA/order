import React from 'react';
// import './App.css';
// import LandingPage from '../src/components/LandingPage';
// import Form from '../src/components/Form/Form';
// import Question from "../src/Question/Question";
// import { questionOptions } from "../src/constant/constant";
import ClickCounter from '../src/components/hoc/ClickCounter';
import HoverCounter from '../src/components/hoc/HoverCounter';
import HookCounter from '../src/components/Hooks/HookCounter';
import HookCounterTwo from '../src/components/Hooks/HookCounterTwo';
import HookCounterThree from '../src/components/Hooks/HookCounterThree';
import HookFour from '../src/components/Hooks/HookFour';
import Order from '../src/components/Order/Order';

function App() {
  return (
    <div className="App">
      {/* <HoverCounter /> */}
      {/* <ClickCounter name='Anju' /> */}
      {/* <HookFour /> */}
      {/* <LandingPage /> */}
      {/* <Form /> */}
      {/* <Question name={questionOptions} /> */}
      <Order />
    </div>
  );
}

export default App;
