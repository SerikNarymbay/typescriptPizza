import React, { FC, useState } from "react";
import Pizza from "../models/Pizza";
import EditPizzaForm from "./EditPizzaForm";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

interface SinglePizzaProps {
  pizza: Pizza;
}

const SinglePizza: FC<SinglePizzaProps> = ({ pizza }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const handleToggleEdit = () => {
    setEdit(!edit);
  };
  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price} ₸</span>
      <div className="pizza-controls">
        <AiFillEdit onClick={handleToggleEdit} />
        <AiFillDelete />
      </div>

      {edit ? <EditPizzaForm data={pizza} /> : null}
    </div>
  );
};

export default SinglePizza;
