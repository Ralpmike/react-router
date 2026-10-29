import axiosInstance from "../axios/axios";

const user = {
  username: "godiya",
  password: "1234",
};

const BASE_URL = "https://fakestoreapi.com";

export async function getAllProducts(controller) {
  try {
    const response = await axiosInstance.get("/products", { signal: controller.signal });
    console.log(response);

    const { data } = response;
    //     if (response.status !== 200)  {
    //       throw new Error(`${response.status} ${response.statusText}`);
    //     }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getSingleProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function signUpUser(user) {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function loginUser(credentials) {
  console.log(credentials);
  try {
    const { username, password } = credentials;

    if (user.username === username && user.password === password) {
      return { ...credentials, token: "qwerty123456" };
    } else {
      throw new Error("Invalid username or password");
    }
  } catch (error) {
    return error;
  }
}
