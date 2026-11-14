import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredPeople } from "../redux/selectors/peopleSelectors";
import { fetchPeople } from "../redux/slices/peopleSlice";
import PeopleCard from "./PeopleCard";

const PeopleList = () => {
  const dispatch = useDispatch();
  const people = useSelector(selectFilteredPeople);
  const status = useSelector((state) => state.people.status);
  const error = useSelector((state) => state.people.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPeople());
    }
  }, [status, dispatch]);

  console.log(people);

  if (status === "loading") {
    return <div className="text-center text-yellow-400 py-10">Завантаження данних...</div>
  }

  if (status === "failed") {
    return <div className="text-red-500 text-center py-10">Помилка: {error}</div>
  }

  if (people.length === 0) {
    return <div className="text-slate-400 text-center py-10">Нічого не знайдено</div>
  }

  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {people.map(person => (
      <PeopleCard key={person.name} person={person} />
    ))}
  </div>;
};

export default PeopleList;
