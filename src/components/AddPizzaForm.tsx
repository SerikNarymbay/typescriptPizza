import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import "./styles.css";
import Pizza from "../models/Pizza";

interface AddPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

const initState = {
  title: "",
  price: "",
  img: "",
};

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<{
    title: string;
    price: string;
    img: string;
  }>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPizza({
      ...newPizza,
      [name]: value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = newPizza;
    if (title && price && img) {
      addPizza({
        title,
        price: Number(price),
        img,
        id: Date.now(),
      });
    }
    setNewPizza(initState);
  };
  console.log("new pizza>>>", newPizza);

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Название"
        name="title"
        type="text"
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        placeholder="Стоимость"
        name="price"
        type="text"
        onChange={handleChange}
        value={newPizza.price}
      />
      <input
        placeholder="Изображение"
        name="img"
        type="text"
        onChange={handleChange}
        value={newPizza.img}
      />
      <button type="submit">+ Добавить в меню</button>
    </form>
  );
};

export default AddPizzaForm;
