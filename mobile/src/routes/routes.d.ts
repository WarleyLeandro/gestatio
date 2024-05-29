export type InitialRoutesParams = {
  ForgotPassword: undefined;
  SignIn: undefined;
  SignUp: undefined;
  PersonalData: undefined;
  PatientEmergency: undefined;
  PatientSus: undefined;
};

//TODO: add abas do menu bar
export type AppRoutesParams = {
  HomeScreens: HomeRoutesParams;
  AnalysisScreens: AnalysisRoutesParams;
  InfoScreens: InfoRoutesParams;
  CalendarScreens: CalendarRoutesParams;
  ProfileScreens: ProfileRoutesParams;
};

export type ProfileRoutesParams = {
  Profile: undefined;
  ProfilePersonal: undefined;
  ProfileSUS: undefined;
  ProfileEmergency: undefined;
  ProfileFAQ: undefined;
  ProfileTerms: undefined;
  ProfilePolicy: undefined;
  ProfileSupport: undefined;
};

export type HomeRoutesParams = {
  Home: undefined;
};

export type InfoRoutesParams = {
  Info: undefined;
  InfoPreNatal: undefined;
  InfoConsulta: undefined;
  InfoExame: undefined;
  InfoAntecedente: undefined;
};

export type CalendarRoutesParams = {
  Calendar: undefined;
};

export type AnalysisRoutesParams = {
  Analysis: undefined;
};
