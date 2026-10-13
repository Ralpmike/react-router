const BASE_URL = 'https://fakestoreapi.com';



export async function getAllProducts(){
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();

    if(!response.ok){
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return data
  } catch (error) {
    console.error(error);
  }
}

export async function getSingleProduct(productId){
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    const data = await response.json();

    if(!response.ok){
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return data
  } catch (error) {
    console.error(error);
  }
}