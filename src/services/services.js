const BASE_URL = "https://fakestoreapi.com";

export async function getAllProducts({signal}) {
  try {
    const response = await fetch(`${BASE_URL}/products`, { signal });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

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

export async function signInUser(user){
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


export async function loginUser({credentials}){
    try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
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
