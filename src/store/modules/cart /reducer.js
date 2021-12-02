import { ADD_CART } from "./actionType";

const initialState = [
  {
    id: 1,
    nome: "Sela americana",
    categoria: "Selas",
    preço: 800,
    img: "https://image.shutterstock.com/image-photo/saddle-horse-over-bale-hay-600w-311500214.jpg",
  },
  {
    id: 2,
    nome: "Bigorna para ferrador 65kg",
    categoria: "Ferramentas",
    preço: 1200,
    img: "https://media.istockphoto.com/photos/old-black-anvil-picture-id1284268722",
  },
];
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return action.updatedCart;
    default:
      return state;
  }
};
