import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { clsx } from "clsx";

import UserCard from "./components/UserCard";

function App() {
  const [koders, setKoders] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function addKoders(koder) {
    setKoders([
      ...koders,
      {
        name: koder.name,
        lastName: koder.lastName,
        github: koder.github,
      },
    ]);
  }

  function onSubmit(data) {
    addKoders(data);
    reset();
  }

  return (
    <main className="text-white items-start gap-8 p-4 mx-auto flex flex-col md:flex-row justify-center w-full max-w-[1360px]">
      <section className="w-full md:w-[500px]">
        <h2 className="text-stone-400 text-[2rem]">
          Formulario de creación de usuarios
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 flex flex-col gap-4"
        >
          <label className="text-stone-600">Nombre</label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "No se permiten campos vacíos",
              },
              minLength: {
                value: 3,
                message: "Agregar al menos un caracter",
              },
            })}
            type="text"
            className={clsx(
              "bg-black text-white border border-white/50 rounded p-2 w-full",
              { "border border-red-500": errors.name }
            )}
          />
          {errors.name && (
            <span className="text-red-500 font-light text-sm">
              {errors.name.message}
            </span>
          )}

          <label className="text-stone-600">Apellido</label>
          <input
            {...register("lastName", {
              required: {
                value: true,
                message: "No se permiten campos vacíos",
              },
              minLength: {
                value: 3,
                message: "Agregar al menos un caracter",
              },
            })}
            type="text"
            className={clsx(
              "bg-black text-white border border-white/50 rounded p-2 w-full",
              { "border border-red-500": errors.lastName }
            )}
          />
          {errors.lastName && (
            <span className="text-red-500 font-light text-sm">
              {errors.lastName.message}
            </span>
          )}

          <label className="text-stone-600">Github</label>
          <input
            {...register("github", {
              required: {
                value: true,
                message: "No se permiten campos vacíos",
              },
              minLength: {
                value: 3,
                message: "Agregar al menos un caracter",
              },
            })}
            type="text"
            className={clsx(
              "bg-black text-white border border-white/50 rounded p-2 w-full",
              { "border border-red-500": errors.github }
            )}
          />
          {errors.github && (
            <span className="text-red-500 font-light text-sm">
              {errors.github.message}
            </span>
          )}

          <button className="bg-sky-800 text-white font-bold rounded p-2 w-full">
            Agregar
          </button>
        </form>
      </section>
      <section className="md:pt-[15vh] w-full md:w-auto">
        {koders.length >= 1 &&
          koders.map((koder, index) => {
            return (
              <UserCard
                name={koder.name}
                lastName={koder.lastName}
                github={koder.github}
                key={`${koder}-${index}`}
              />
            );
          })}
      </section>
    </main>
  );
}

export default App;
