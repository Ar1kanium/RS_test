import React from "react";
import './App.css';
import SwipeableViews from "react-swipeable-views";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";

function App() {
    const [currentPage, setCurrentPage] = React.useState(true)
  return (
      <div className='wrapper'>
          <SwipeableViews onChangeIndex={() => setCurrentPage(!currentPage)} animateHeight>
              <FirstPage currentPage={currentPage}/>
              <SecondPage currentPage={currentPage}/>
          </SwipeableViews>
      </div>
  );
}

export default App;
