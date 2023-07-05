// Esto se puede hacer pero no es muy recomendado , es para niñitas xD

import { DiaryAnimals } from "../types";

const diaryEntries: Array<DiaryAnimals> = [
  {
    name: "Meowsy",
    species: "cat",
    owner: true,
    foods: {
      likes: ["tuna", "catnip"],
      dislikes: ["ham", "zucchini"],
    },
  },
  {
    name: "Barky",
    species: "dog",
    owner: false,
    foods: {
      likes: ["bones", "carrots"],
      dislikes: ["tuna"],
    },
  },
  {
    name: "Purrpaws",
    species: "cat",
    owner: true,
    foods: {
      likes: ["mice"],
      dislikes: ["cookies"],
    },
  },
];

export default diaryEntries;
