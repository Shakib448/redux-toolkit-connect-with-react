const { createSlice } = require("@reduxjs/toolkit");

let projectId = 0;
const project = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        id: ++projectId,
        name: action.payload.name,
      });
    },
  },
});

export const { projectAdded } = project.actions;

export default project.reducer;
