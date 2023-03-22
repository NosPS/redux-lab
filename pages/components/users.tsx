import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, setUsers } from "../../store/actions/userAction";
import { getProps } from "@/store/actions/propsAction";
import { store } from "@/store/store";

const Users = () => {
  const dispatch = useDispatch<any>();
  const usersList = useSelector((state: any) => state.usersList);
  const propsList = useSelector((state: any) => state.propsList);
  const { loading, error, users } = usersList;
  const { props } = propsList;
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getProps("test"));
  }, [dispatch]);
  console.log(usersList);
  console.log(propsList);
  console.log(store.getState());

  return (
    <>
      {loading
        ? "Loading..."
        : error
        ? error.message
        : users.map((u: any) => <h3>{u.name}</h3>)}
      {loading
        ? "Loading..."
        : error
        ? error.message
        : props.map((u: any) => <h3>{u.props}</h3>)}
    </>
  );
};

export default Users;
