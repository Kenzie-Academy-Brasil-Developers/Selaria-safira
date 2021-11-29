import { CHANGE_PRODUCT } from "./actionType";
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
  {
    id: 3,
    nome: "Cabresto de corda",
    categoria: "Acessórios",
    preço: 50,
    img: "https://img.irroba.com.br/fit-in/1000x1000/filters:fill(fff):quality(95)/cavalari/catalog/fotos-produtos-novo/selaria/cabrestos-e-cabos/cabresto-de-corda-boots-horse-verde-escuro-0120191220154925.jpg",
  },
  {
    id: 4,
    nome: "Cabresto de couro",
    categoria: "Acessórios",
    preço: 100,
    img: "https://image.shutterstock.com/image-photo/portrait-light-brown-horse-leather-600w-1917455054.jpg",
  },
  {
    id: 5,
    nome: "Sela para equitação",
    categoria: "Selas",
    preço: 3000,
    img: "https://decathlonpro.vteximg.com.br/arquivos/ids/2740322/synthia-saddle-black-17-5-17-51.jpg?v=637517650331470000",
  },
  {
    id: 6,
    nome: "Conjunto freio + cabeçada e redea em couro legitimo",
    categoria: "Acessórios",
    preço: 300,
    img: "https://image.shutterstock.com/z/stock-photo-head-of-a-horse-in-gala-harness-with-chestnut-coloring-2078947393.jpg",
  },
  {
    id: 7,
    nome: "Sela australiana",
    categoria: "Selas",
    preço: 1000,
    img: "https://selasandrade.com.br/wp-content/uploads/2019/05/SELA-AUSTRALIANA-MANGALARGA-IN-COD-018.jpg",
  },
  {
    id: 8,
    nome: "Rinete Loop jk",
    categoria: "Ferramentas",
    preço: 1000,
    img: "https://http2.mlstatic.com/D_NQ_NP_771288-MLB31498325619_072019-O.jpg",
  },
  {
    id: 9,
    nome: "Grosa excel legend",
    categoria: "Ferramentas",
    preço: 1000,
    img: "https://6849028l.ha.azioncdn.net/img/2021/09/produto/3484/1/large/grosa-excel-legend-mustad.jpg",
  },
];

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRODUCT:
      const { products } = action;
      return products;
    default:
      return state;
  }
};
