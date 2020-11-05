import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnresolvedBugs, loadBugs, resolveBug } from "../store/bugs";

const Bugs = () => {
  const dispatch = useDispatch();
  const bugs = useSelector(getUnresolvedBugs);

  console.log(bugs);

  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  return (
    <ul>
      {bugs.map((bug) => (
        <div>
          <li key={bug.id}> {bug.description}</li>
          <button onClick={() => dispatch(resolveBug(bug.id))}>Resolve</button>
        </div>
      ))}
    </ul>
  );
};

export default Bugs;
