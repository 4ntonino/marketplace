/* Url dell'API */

const url = "https://striveschool-api.herokuapp.com/api/product/";

/* Analizzo la stringa */

let param = new URLSearchParams(window.location.search);

/* Recupero il valore del parametro "id"  */

let id = param.get("id");

/* Eseguo la funzione una volta caricata la pagina */
/* Utilizzo Async/Await */

window.onload = async () => {
  if (id) {
    /*  Recupero i dati del prodotto con l'id specificato */

    const res = await fetch(url + id, {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMjk3NDBiM2IyNTAwMTUxYjU0M2UiLCJpYXQiOjE3MTUwODc3MzIsImV4cCI6MTcxNjI5NzMzMn0.4ac4HMa4KOLh2M12OHfFmh92wHk5z7Pd8yaCLJDHTs4",
      },
    });

    /* Converto in JSON */

    const product = await res.json();

    /* Imposto il valore di vari elementi HTML : name, description, imageUrl, brand e price) */

    document.querySelector("#name").value = product.name;
    document.querySelector("#description").value = product.description;
    document.querySelector("#imageUrl").value = product.imageUrl;
    document.querySelector("#brand").value = product.brand;
    document.querySelector("#price").value = product.price;
    document.querySelector(".btn-success").remove();
  } else {
    document.querySelector(".btn-danger").remove();
    document.querySelector(".btn-secondary").remove();
  }
};

/* Funzione per creare un nuovo prodotto, utilizzo Async/Await con il metodo POST */

const createNew = async () => {
  const product = {
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    brand: document.querySelector("#brand").value,
    imageUrl: document.querySelector("#imageUrl").value,
    price: document.querySelector("#price").value,
  };
  let res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMjk3NDBiM2IyNTAwMTUxYjU0M2UiLCJpYXQiOjE3MTUwODc3MzIsImV4cCI6MTcxNjI5NzMzMn0.4ac4HMa4KOLh2M12OHfFmh92wHk5z7Pd8yaCLJDHTs4",
    },
    body: JSON.stringify(product),
  });
  if (res.ok) {
    alert("Prodotto Aggiunto!");
  }
};

/* Funzione per modificare un prodotto, sempre con l'uso di Async/Await con il metodo PUT */

const editProduct = async () => {
  const product = {
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    brand: document.querySelector("#brand").value,
    imageUrl: document.querySelector("#imageUrl").value,
    price: document.querySelector("#price").value,
  };
  let res = await fetch(url + id, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMjk3NDBiM2IyNTAwMTUxYjU0M2UiLCJpYXQiOjE3MTUwODc3MzIsImV4cCI6MTcxNjI5NzMzMn0.4ac4HMa4KOLh2M12OHfFmh92wHk5z7Pd8yaCLJDHTs4",
    },
    body: JSON.stringify(product),
  });
  if (res.ok) {
    alert("Prodotto Aggiunto!");
  }
};

/* Funzione per modificare un prodotto con l'uso di Async/Await e il metodo DELETE */

const deleteProduct = async () => {
  let res = await fetch(url + id, {
    method: "DELETE",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMjk3NDBiM2IyNTAwMTUxYjU0M2UiLCJpYXQiOjE3MTUwODc3MzIsImV4cCI6MTcxNjI5NzMzMn0.4ac4HMa4KOLh2M12OHfFmh92wHk5z7Pd8yaCLJDHTs4",
    },
  });
  if (res.ok) {
    alert("Prodotto Eliminato!");
  }
};
