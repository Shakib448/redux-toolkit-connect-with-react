import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getUnresolvedBugs, loadBugs } from "../store/bugs";

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
        <li key={bug.id}> {bug.description}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  bugs: state.entities.bugs.list,
});

const mapDispatchToProps = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
