const { combineReducers } = require("redux");
import entitesReducer from "./enities";

export default combineReducers({
  entities: entitesReducer,
});
