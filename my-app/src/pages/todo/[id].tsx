import React from "react";
import { useRouter } from "next/router";

const Todo = () => {
  const router = useRouter();
  return <div>todo:{router.query.id}</div>;
};

export default Todo;
