import { Alert as RNAlert } from "react-native";

interface ISimpleAlert {
  title: string,
  text: string,
  buttons: Object[],
  options: Object,
};

export const Alert = (params: ISimpleAlert) => {
  const {
    title,
    text,
    buttons,
    options,
  } = params;
  
  return RNAlert.alert(
    title,
    text,
    buttons,
    options,
  )
};
