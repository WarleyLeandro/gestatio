import { ButtonListProps } from "../../../@types/app.list";

export enum RoutesButtonEnum {
  PROFILE_PERSONAL = "ProfilePersonal",
  PROFILE_SUS = "ProfileSUS",
  PROFILE_EMERGENCY = "ProfileEmergency",
  PROFILE_TERMS = "ProfileTerms",
  PROFILE_POLICY = "ProfilePolicy",
  PROFILE_SUPPORT = "ProfileSupport",
  PROFILE_FAQ = "ProfileFAQ",
}

const listButtonMenu: ButtonListProps[] = [
  {
    id: 1,
    title: "Dados pessoais",
    nameIcon: "user",
    route: RoutesButtonEnum.PROFILE_PERSONAL,
  },
  {
    id: 3,
    title: "Dados SUS",
    nameIcon: "plus-square",
    route: RoutesButtonEnum.PROFILE_SUS,
  },
  {
    id: 3,
    title: "Dados de emergência",
    nameIcon: "heartbeat",
    route: RoutesButtonEnum.PROFILE_EMERGENCY,
  },
  {
    id: 4,
    title: "Termos de uso",
    nameIcon: "check-square",
    route: RoutesButtonEnum.PROFILE_TERMS,
  },
  {
    id: 5,
    title: "Política de privacidade",
    nameIcon: "lock",
    route: RoutesButtonEnum.PROFILE_POLICY,
  },
  {
    id: 6,
    title: "Suporte",
    nameIcon: "phone",
    route: RoutesButtonEnum.PROFILE_SUPPORT,
  },
  {
    id: 7,
    title: "FAQ",
    nameIcon: "question-circle",
    route: RoutesButtonEnum.PROFILE_FAQ,
  },
];

export default listButtonMenu;
