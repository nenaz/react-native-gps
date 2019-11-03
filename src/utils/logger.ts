import { Dispatch } from "react";

export const logger = (
  store: { dispatch: Dispatch<any>},
) => (next: Function) => (action: any) => {
  console.log(`Тип события: ${action.type}, дополнительные данные события: `, action.payload)
  return next(action);
};
