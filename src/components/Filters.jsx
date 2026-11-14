import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGenderFilter, setSearchQuery } from "../redux/slices/filtersSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const { searchQuery, genderFilter } = useSelector((state) => state.filters);

  return (
    <>
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 tracking-wider mb-2">
          STAR WARS DATABASE
        </h1>
        <p className="text-slate-400">Довідник персонажів</p>
      </header>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Пошук за ім'ям"
          value={searchQuery}
          onChange={(event) => dispatch(setSearchQuery(event.target.value))}
          className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-yellow-400"
        />
        <select
          value={genderFilter}
          onChange={(event) => dispatch(setGenderFilter(event.target.value))}
          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-yellow-400"
        >
          <option value="all">Усі статті</option>
          <option value="male">Чоловіча</option>
          <option value="female">Жіноча</option>
          <option value="n/a">Інша</option>
        </select>
      </div>
    </>
  );
};

export default Filters;
