// sna
const logger = (param) => (store) => (next) => (action) => {
  next(action);
};

export default logger;
