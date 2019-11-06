import { LOAD_MESSAGES_SUCCESS_TYPE } from "../actions/messages";

const logMiddleware = store => next => action => {
  console.log(store.getState());

  if (action.type === LOAD_MESSAGES_SUCCESS_TYPE) {
    // call GA
  }

  next(action);
};

export default logMiddleware;
