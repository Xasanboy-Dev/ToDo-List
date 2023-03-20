import axios from "axios";
import e from "cors";
export async function LoginAuth(telNumber: string) {
  try {
    let num = Number(telNumber).toString();
    if (num == "NaN" || num == "0") {
      alert("Please eneter correct number!");
      return;
    } else {
      const result = await axios.post(`http://localhost:8080/auth/login`, {
        phoneNumber: num,
      });
      console.log(result.data);
    }
  } catch (error: any) {
    alert(error.response.data.message);
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
