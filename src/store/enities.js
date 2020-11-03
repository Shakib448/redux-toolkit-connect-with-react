const { combineReducers } = require("redux");
import bugsReducers from "./bugs";
import projectsReducer from "./projects";
import usersReducer from "./users";

export default combineReducers({
  bugs: bugsReducers,
  projects: projectsReducer,
  users: usersReducer,
});
