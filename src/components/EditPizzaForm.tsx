import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import "./styles.css";
import Pizza from "../models/Pizza";

interface EditPizzaFormProps {
  data: Pizza;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data }) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditPizza({
      ...editPizza,
      [name]: value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = editPizza;
    if (title && price && img) {
      console.log("edit pizza>>>>", editPizza);
    }
  };
  console.log("edit pizza>>>>", editPizza);
  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        placeholder="Название"
        name="title"
        type="text"
        onChange={handleChange}
        value={editPizza.title}
      />
      <input
        placeholder="Стоимость"
        name="price"
        type="text"
        onChange={handleChange}
        value={editPizza.price}
      />
      <input
        placeholder="Изображение"
        name="img"
        type="text"
        onChange={handleChange}
        value={editPizza.img}
      />
      <button type="submit">Подтвердить</button>
    </form>
  );
};

export default EditPizzaForm;
