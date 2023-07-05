import { DiaryAnimals, NonSensitiveInfoDiaryEntry } from "../types";
import diaryData from "./Animals.json";

const diaries: DiaryAnimals[] = diaryData as Array<DiaryAnimals>; // Asenrtion de tipos | ocupo ambas sintaxis

export const getEntries = () => diaries;

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => diaries;

export const addEntry = () => null;
