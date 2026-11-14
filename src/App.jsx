import React from "react";
import "./App.css";
import PeopleList from "./components/PeopleList";
import Filters from "./components/Filters";
import PersonModal from "./components/PersonModal";

const App = () => {
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen p-6 md:p-10 font-sans">
      <div className="mx-auto max-w-7xl">
        <Filters />
        <PeopleList />
        <PersonModal />
      </div>
    </div>
  );
};

export default App;
