const products = [
  {
    id: 1,
    name: "cadeira metálica",
    price: 11000,
    img: "../products/cadeira-metalica.png",
    description: "Cadeira feita em metal na cor preta.",
  },
  {
    id: 2,
    name: "cadeiras estampadas",
    price: 13000,
    img: "../products/cadeiras-estampadas.png",
    description: "Cadeiras de madeira com estampas diversas.",
  },
  {
    id: 3,
    name: "hack em madeira azul",
    price: 24000,
    img: "../products/hack-madeira-azul.png",
    description: "Hack de madeira com detalhes em branco e azul.",
  },
  {
    id: 4,
    name: "mesa de madeira circular",
    price: 8200,
    img: "../products/mesa-circular.png",
    description: "Mesa de tabuas de madeira circular.",
  },
  {
    id: 5,
    name: "sofa de couro",
    price: 16700,
    img: "../products/sofa-couro.png",
    description: "Sofá de 2 lugares em couro marrom.",
  },
  {
    id: 6,
    name: "sofa de canto preto",
    price: 13000,
    img: "../products/sofa-preto.png",
    description: "Sofa de canto com 5 lugares na cor preta.",
  },
  {
    id: 7,
    name: "cadeira de vime acolchoada",
    price: 14500,
    img: "../products/pexels-alexander-zvir-3705539.jpg",
    description: "Cadeira aconchegante de vime com almofadas",
  },
  {
    id: 8,
    name: "texas banco com couro",
    price: 8700,
    img: "../products/pexels-athena-2180883.jpg",
    description: "Texas banco de madeira com assento de couro",
  },
  {
    id: 9,
    name: "Cama de casal",
    price: 21000,
    img: "../products/pexels-julie-aagaard-1374125.jpg",
    description: "Cama de casal com estrutura de madeira",
  },
  {
    id: 10,
    name: "Mesa de jantar com 8 lugares",
    price: 17000,
    img: "../products/pexels-mark-mccammon-1080696.jpg",
    description: "Mesa de jantar de maderia para até 8 pessoas",
  },
];

export default products;

export function getProductById(id: number) {
  return products.find((p) => p.id == id);
}
