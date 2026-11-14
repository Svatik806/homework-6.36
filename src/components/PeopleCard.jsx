import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedPerson } from "../redux/slices/peopleSlice";

const PeopleCard = ({ person }) => {
  const dispatch = useDispatch()

  return (
    <div onClick={() => dispatch(setSelectedPerson(person))} className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex flex-col justify-between hover:border-yellow-400 transition-all shadow-lg">
      <div>
        <h3 className="text-xl font-bold text-yellow-400 mb-2">
          {person.name}
        </h3>
        <div className="text-slate-300 text-sm space-y-1">
          <p>
            <span className="text-slate-500">Зріст:</span> {person.height} см
          </p>
          <p>
            <span className="text-slate-500">Маса:</span> {person.mass} кг
          </p>
          <p>
            <span className="text-slate-500">Стать:</span> {person.gender}
          </p>
          <p>
            <span className="text-slate-500">Рік народження:</span>{" "}
            {person.birth_year}
          </p>
        </div>
      </div>
      <div className="mt-4 text-xs text-yellow-400 font-semibold text-right">
        Детальніше
      </div>
    </div>
  );
};

export default PeopleCard;
