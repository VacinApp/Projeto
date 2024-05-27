
// ------------ CREATE -----------
export async function addVacCarteira(vac) {
  try {
    const response = await fetch("http://localhost:8000/carteira",
      {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(vac)
      });
    return response.status;
  } catch (error) { console.log("ERROR: " + error); }
}


// ------------ READ ------------
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

export async function getPostos() {
  try {
    const response = await fetch("http://localhost:8000/postos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

// ---------- UPDATE ------------
export async function updateVacCarteira(vac) {
  try {
    const response = await fetch("http://localhost:8000/carteira/" + vac.id,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(vac)
      }
    );
    return response.status;
  } catch (error) {
    console.log("ERROR: " + error)
  }
}

// ---------- DELETE ------------
export async function deleteVacCarteira(id) {
  try {
    const response = await fetch("http://localhost:8000/carteira/" + id,
      {
        method: "DELETE",
      }
    );
    return response.status;
  } catch (error) {
    console.log("ERROR: " + error)
  }
}