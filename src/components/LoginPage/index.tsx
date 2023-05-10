import axios from "axios";
import styles from "./loginPage.module.scss";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const [users, setUsers] = useState("");
  async function getUsers() {
    const final = await axios
      .post(`http://localhost:8080/user/login`, {
        userName: "admin",
        password: "admin",
      })
      .then((res) => {
        // const users = res.data;
        console.log("res: ", res);
        // setUsers(users);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getUsers();
    console.log("users: ", users);
  }, []);

  return (
    <>
      <div className={styles.center}>
        <h1>Login</h1>
        <form method="post">
          <div className={styles.txt_field}>
            <input type="text" required />
            <span></span>
            <label>Username</label>
          </div>
          <div className={styles.txt_field}>
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div className={styles.pass}>Forgot Password?</div>
          <input type="submit" value="Login" />
          <div className={styles.signup_link}>
            Not a member? <a href="#">Signup</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
