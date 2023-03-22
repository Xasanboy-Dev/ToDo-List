import axios from "axios";
export async function LoginAuth(telNumber: string, password: string) {
  try {
    let num = Number(telNumber).toString();
    if (telNumber.length !== 12) {
      alert("Please enter correct data!");
      return;
    }
    if (num == "NaN" || num == "0" || !password) {
      alert("Please eneter correct number!");
      return;
    } else {
      const result = await axios.post(`http://localhost:8080/auth/login`, {
        phoneNumber: num,
        password,
      });
      let token = result.data.token;
      localStorage.setItem("hello", token);
      return (window.location.href = "/");
    }
  } catch (error: any) {
    alert(error.response.data.message);
    return;
  }
}

export async function RegisterAuth(
  name: String,
  lastname: string,
  password: string,
  email: string,
  phoneNumber: string,
  country: string
) {
  try {
    if (name && lastname && password && email && phoneNumber && country) {
      if (email.includes("@")) {
        if (
          name.length > 2 &&
          lastname.length > 2 &&
          password.length > 2 &&
          phoneNumber.length == 12
        ) {
          const result = await axios.post(
            `http://localhost:8080/auth/register`,
            {
              name,
              phoneNumber,
              surname: lastname,
              country,
              password,
            }
          );
          alert(result.data.message);
          return (window.location.href = "/login");
        } else {
          return alert("Pleae enter correct data!");
        }
      } else {
        return alert("Please enter correct emal address!");
      }
    } else {
      alert("Please fill all the gaps!");
      return;
    }
  } catch (error: any) {
    alert(error.response.data.message);
    return;
  }
}

export function checkTokenValid(token: string) {
  if (!token) {
    return false;
  } else {
    const result = axios.post(`http://localhost:8080/auth/token`, { token });
    result
      .then((res) => {
        if (res) {
          return res.data.token;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
