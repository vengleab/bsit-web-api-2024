import { useEffect, useState } from "react";
import Login from "../../pages/Login";
import axios from "axios";
import UserContext from "../../context/user-token";

const Protected = (props) => {
  const [isLogin, setLogin] = useState();

  useEffect(() => {
    // get token from localStorage
    // const token = localStorage.getItem("token");
    let token = 'testesset';
    // if (token) {
    axios
      .get("http://localhost:8080/api/users", {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      })
      .then((response) => {
        setLogin(true);
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  }, []);

  return (
    <UserContext.Provider value={{ isLogin, setLogin }}>
      {!isLogin ? <Login /> : props.children}
    </UserContext.Provider>
  );
};

export default Protected;
