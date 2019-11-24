import { Dispatch } from "react";

export const logger = (
  store: any,
) => (next: Function) => (action: any) => {
  console.log('**__store__**', store.getState());
  console.log(`Тип события: ${action.type}, дополнительные данные события: `, action.payload)
  return next(action);
};
