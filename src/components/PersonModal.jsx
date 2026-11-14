import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSelectedPerson,
  fetchHomeworld,
} from "../redux/slices/peopleSlice";

const PersonModal = () => {
  const dispatch = useDispatch();
  const person = useSelector((state) => state.people.selectedPerson);
  const homeworld = useSelector((state) => state.people.homeworld);
  const homeworldStatus = useSelector((state) => state.people.homeworldStatus);

  useEffect(() => {
    if (person && person.homeworld) {
      dispatch(fetchHomeworld(person.homeworld));
    }
  }, [person, dispatch]);

  if (!person) return;

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-slate-800 border border-yellow-400/50 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl">
        <button
          onClick={() => dispatch(clearSelectedPerson())}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold p-1"
        >
          ✕
        </button>

        <h2 className="text-2xl font-extrabold text-yellow-400 mb-4">
          {person.name}
        </h2>
        <div className="space-y-3 text-slate-200">
          <div className="grid grid-cols-2 gap-2 bg-slate-900/50 p-4 rounded-lg border border-slate-700">
            <p>
              <span className="text-slate-400 block text-xs">Зріст</span>{" "}
              {person.height} см
            </p>
            <p>
              <span className="text-slate-400 block text-xs">Маса</span>{" "}
              {person.mass} кг
            </p>
            <p>
              <span className="text-slate-400 block text-xs">
                Колір волосся
              </span>{" "}
              {person.hair_color}
            </p>
            <p>
              <span className="text-slate-400 block text-xs">Колір очей</span>{" "}
              {person.eye_color}
            </p>
            <p>
              <span className="text-slate-400 block text-xs">
                Рік народження
              </span>{" "}
              {person.birth_year}
            </p>
            <p>
              <span className="text-slate-400 block text-xs">Стать</span>{" "}
              {person.gender}
            </p>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
            <h4 className="text-sm font-semibold text-yellow-400 mb-2">
              Рідна планета
            </h4>
            {homeworldStatus === "loading" && (
              <p className="text-slate-400 text-sm">
                Отримання даних про планету...
              </p>
            )}
            {homeworldStatus === "failed" && (
              <p className="text-red-400 text-sm">
                Не вдалося завантажити планету
              </p>
            )}
            {homeworld && (
              <div className="text-sm space-y-1">
                <p>
                  <span className="text-slate-400">Назва:</span>{" "}
                  {homeworld.name}
                </p>
                <p>
                  <span className="text-slate-400">Клімат:</span>{" "}
                  {homeworld.climate}
                </p>
                <p>
                  <span className="text-slate-400">Ландшафт:</span>{" "}
                  {homeworld.terrain}
                </p>
                <p>
                  <span className="text-slate-400">Населення:</span>{" "}
                  {homeworld.population}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonModal;
