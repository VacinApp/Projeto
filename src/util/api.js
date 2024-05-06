export async function getVacinas() {
  try {
    const response = await fetch("http://localhost:8000/vacinas");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("ERROR: " + error);
  }
}

export async function getVacinaByNome(nome) {
  try {
    const response = await fetch(`http://localhost:8000/vacinas?nome=${nome}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("ERROR: " + error);
  }
}

export async function getCategoria() {
  try {
    const response = await fetch("http://localhost:8000/categoria");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("ERROR: " + error);
  }
}

export async function getCategoriaByNome(nome) {
  try {
    const response = await fetch(`http://localhost:8000/categoria?nome=${nome}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("ERROR: " + error);
  }
}

export async function getCarteira() {
  try {
    const response = await fetch("http://localhost:8000/carteira");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("ERROR: " + error);
  }
}