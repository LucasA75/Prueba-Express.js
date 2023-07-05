/* Para hacer tipos */
export type Animal = "cat" | "dog" | "turtle";
export type Owner = true | false;

//Las interfaces se pueden extender los tipos NO
export interface DiaryAnimals {
  name: string;
  species: Animal;
  owner: Owner;
  foods: {
    likes: string[];
    dislikes: string[];
  };
}
[];

// Ocupamos esto para ocupar la interfaz padre sin tenere que copiar y pegar
// si solo queremos algunos atributos

export type NonSensitiveInfoDiaryEntry = Pick<
  DiaryAnimals,
  "foods" | "name" | "species"
>;

//Tambien esta el Omit
