import React from "react";

export default function UserCard(props) {
  console.log(props, "ddj");
  return (
    <div className="flex md:w-[300px] text-black border border-x-zinc-700 p-3 bg-white rounded-md gap-3 mt-5">
      <img
        className="w-[50px] h-[50px] rounded-full"
        src={props.github}
        alt={props.name}
      />
      <div className="flex flex-col">
        <p className="font-semibold">{props.name}</p>
        <p>{props.lastName}</p>
      </div>
    </div>
  );
}
