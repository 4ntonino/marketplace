const url = "https://striveschool-api.herokuapp.com/api/product/";

let param = new URLSearchParams(window.location.search);
let id = param.get("id");
window.onload = async () => {
  if (id) {
    const res = await fetch(url + id, {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMjk3NDBiM2IyNTAwMTUxYjU0M2UiLCJpYXQiOjE3MTUwODc3MzIsImV4cCI6MTcxNjI5NzMzMn0.4ac4HMa4KOLh2M12OHfFmh92wHk5z7Pd8yaCLJDHTs4",
      },
    });
    const product = await res.json();
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
