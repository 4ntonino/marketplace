
/* Url dell'API */

const url = "https://striveschool-api.herokuapp.com/api/product/";

window.onload = async () => {
  const res = await fetch(url, {
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMjk3NDBiM2IyNTAwMTUxYjU0M2UiLCJpYXQiOjE3MTUwODc3MzIsImV4cCI6MTcxNjI5NzMzMn0.4ac4HMa4KOLh2M12OHfFmh92wHk5z7Pd8yaCLJDHTs4",
    },
  });

  /* recupero i dati dei prodotti */

  const products = await res.json();
  const row = document.querySelector("#products");

  /* Itero su ogni elemento dell'Array */
  
  products.forEach((prod) => {
    row.innerHTML += `
    <div class='col col-3 col-lg-3 col-md-4 col-sm-6 col-sm-12 mb-4'>  
      <div class="card justify-content-between">
        <img src="${prod.imageUrl}" class="card-img-top" alt="${prod._id}_${prod.name}">
        <div class="card-body">
          <h5 class="card-title">${prod.name}</h5>
          <a href="./backoffice.html?id=${prod._id}" class="btn btn-primary">Dettagli</a>
        </div>
      </div> 
    </div>`;
  });
};
