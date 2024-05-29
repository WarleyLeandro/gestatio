import { ItemListProps } from "../../../@types/app.list";
export enum RoutesEnum {
  InfoPreNatal = "InfoPreNatal",
  InfoConsulta = "InfoConsulta",
  InfoExame = "InfoExame",
  InfoAntecedente = "InfoAntecedente",
}

const listMenu: ItemListProps[] = [
  {
    id: 1,
    title: "Pré-natal",
    subTitle: "",
    route: RoutesEnum.InfoPreNatal,
  },
  {
    id: 2,
    title: "Consultas",
    subTitle: "",
    route: RoutesEnum.InfoConsulta,
  },
  {
    id: 3,
    title: "Exames",
    subTitle: "",
    route: RoutesEnum.InfoExame,
  },
  {
    id: 4,
    title: "Antecedentes",
    subTitle: "",
    route: RoutesEnum.InfoAntecedente,
  },
  {
    id: 5,
    title: "Antecedentes B",
    subTitle: "",
    route: RoutesEnum.InfoAntecedente,
  },
];

export default listMenu;
