const { createSlice } = require("@reduxjs/toolkit");

let usersId = 0;
const user = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: (user, action) => {
      user.push({
        id: ++usersId,
        name: action.payload.name,
      });
    },
  },
});

export const { userAdded } = user.actions;

export default user.reducer;
