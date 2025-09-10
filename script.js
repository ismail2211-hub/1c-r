const wrapper = document.getElementById('wrapper')

fetch('https://dummyjson.com/products')
  .then(dior => dior.json())
  .then(data => {
    console.log(data.products);
    renderList(data.products)
  })

function renderList(item) {
  item.map(product => {
    const div = document.createElement('div')
    div.innerHTML = `
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="${product.thumbnail}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${product.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    `
    wrapper.append(div)
  })
} 