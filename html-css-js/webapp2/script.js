const products = [
  {
    name: "Product 1",
    desc: "This is a sample description",
    price: "$45",
    imgUrl: "https://picsum.photos/id/111/200/200",
  },
  {
    name: "Product 2",
    desc: "This is a sample description",
    price: "$50",
    imgUrl: "https://picsum.photos/id/119/200/200",
  },
  {
    name: "Product 3",
    desc: "This is a sample description",
    price: "$70",
    imgUrl: "https://picsum.photos/id/113/200/200",
  },
  {
    name: "Product 4",
    desc: "This is a sample description",
    price: "$30",
    imgUrl: "https://picsum.photos/id/145/200/200",
  },
  {
    name: "Product 5",
    desc: "This is a sample description",
    price: "$90",
    imgUrl: "https://picsum.photos/id/164/200/200",
  }
];

function showProducts() {
  let str = `<div class="row">`;
  products.map(e=>{
    str = str + `
    <div>
    <img src=${e.imgUrl}/>
    <h3>${e.name}</h3>
    <p>${e.desc}</p>
    <h5>${e.price}</h5>
    <button>Add to Cart</button>
    </div>
      `
  })
  str = str + `</div>`;
  root.innerHTML = str;
}