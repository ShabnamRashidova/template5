const menu = [
  {
    id: 1,
    title: "Americano Rosted GRED",
    img: "img/photo1.jpg",
    category: "AMERICANO",
    price: "$12.00",
    desc: `I'm baby woke mlkshk  freegan copper mug whatever cold-pressed`,
  },
  {
    id: 2,
    title: "VIRGIN COFFEE GRED",
    img: "img/photo2.jpg",
    category: "cold-drink",
    price: "$14.00",
    desc: `Donec et nibh maximus,quis quam venenatis fringilla.`,
  },
  {
    id: 3,
    title: "CAFÈ AU LAIT Coffee",
    img: "img/photo3.jpg",
    category: "cold-drink",
    price: "$13.00",
    desc: `Curabitur semper erat a lacusey sedn consequat, sit ametey.`,
  },
  {
    id: 4,
    title: "JAPANIS COFFEE GRED",
    img: "img/photo4.jpg",
    category: "AMERICANO",
    price: "$16.00",
    desc: `Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat.`,
  },
  {
    id: 5,
    title: "Americano",
    img: "img/photo5.jpg",
    category: "AMERICANO",
    price: "$12.00",
    desc: `Curabitur semper erat a lacusey sedn consequat, sit ametey.`,
  },
  {
    id: 6,
    title: "EXRESSO RISTRETTO",
    img: "img/photo6.jpg",
    category: "EXPRESSO",
    price: "$12.00",
    desc: `The coffee is brewed by first roasting the green coffee.
.`,
  },
  {
    id: 7,
    title: "Best Coffee flavour",
    img: "img/photo8.jpg",
    category: "cold-drink",
    price: "$12.00",
    desc: `The coffee is brewed by first roasting the green coffee beans over hot
     `,
  },
  {
    id: 8,
    title: "EXPRESSO RISTRETTO",
    img: "img/photo9.jpg",
    category: "EXPRESSO",
    price: "$12.00",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, 
    hammock`,
  },
  {
    id: 9,
    title: "Best Coffee flavour",
    img: "img/photo10.jpg",
    category: "cold-drink",
    price: "$12.00",
    desc: ` is brewed by first roasting the green coffee beans over hot
    .`,
  },
  {
    id: 10,
    title: "EXPRESSO RISTRETTO",
    img: "img/photo11.jpg",
    category: "EXPRESSO",
    price: "$12.00",
    desc: `The coffee is brewed by first roasting the green coffee beans over hot
  .`,
  }
];
const article= [
  {
    id: 1,
    title: "BY: RASALINA \ LIFE \ 23.01.2017 ",
    img: "./img/blog-3.jpeg",
    info: `Ideal Cocktails From Our Barmen For Pefect Mood`,
    link:`read more`,
  },
  {
    id: 2,
    title: "BY: RASALINA \ LIFE \ 12.12.2017 ",
    img: "./img/blog-2.jpeg",
    info: `Build A Cool Mornig With Cafena Coffee`,
    link:`read more`,
  },
  {
    id: 3,
    title: "BY: RASALINA \ LIFE \ 3.11.2016 ",
    img: "img/blog-1.jpeg",
    info: `Questions Business Must Be Able To Answers`,
    link:`read more`,
  }
];
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
  displayArticleItems(article);
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<div class="menu-item col-xl-6 mb-5">
            <div class="menu-left">
                <div class="menu-img">
                     <img src=${item.img} alt="">
                </div>
            </div>
            <div class="menu-right">
                <div class="menu-title">
                   ${item.title}
                </div>
                <span class="price">${item.price}</span>
                <div class="desc">${item.desc}</div>
            </div>
        </div>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn " type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
/*ATICLE*/
const articleContent =document.querySelector('.article-content');
function displayArticleItems(articleItem){
  let displayArticle = articleItem.map(function (item) {
    return `
    <div class="col-lg-4">
    <div class="article-item article-item-1">
        <div class="image">
           <div class="image-col"> <img src= ${item.img} alt="img" class="img-fluid"></div>
        </div>
        <div class="content">
              <div class="article-title">${item.title}</div>
           <div class="info">${item.info}</div>
           <a href="#" class="link">${item.link}</a>
        </div>
    </div>
</div>
</div> `
});
displayArticle =displayArticle.join("");
articleContent.innerHTML=displayArticle;
}

/**OPEN-CLOSE MODAL */
const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const modalCloseBtn = document.querySelector(".modal-close-btn");
modalBtn.addEventListener("click", function () {
  modalOverlay.classList.add("open-modal");
});
modalCloseBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});
/*SEARCH FORM*/
const searchBtn = document.querySelector(".open");
const searchCloseBtn = document.querySelector(".close");
const searchForm = document.querySelector(".search-form");
searchBtn.addEventListener("click", function () {
  searchBtn.style.display = "none";
  searchCloseBtn.style.display = "block";
  searchForm.classList.add("search-form-show");
});
searchCloseBtn.addEventListener("click", function () {
  searchForm.classList.remove("search-form-show");
  searchBtn.style.display = "block";
  searchCloseBtn.style.display = "none";
});
/*SIDEBAR*/
const openSidebar = document.querySelector(".open-sidebar");
const closeSidebar = document.querySelector(".close-sidebar-btn");
const sidebarContainer = document.querySelector(".sibear-container");
openSidebar.addEventListener("click", function () {
  console.log("hello");
  sidebarContainer.classList.add("sidebar-show");
});
closeSidebar.addEventListener("click", function () {
  sidebarContainer.classList.remove("sidebar-show");
});
$('.review-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  dots:false,
  nav:false,
  responsive:{
      0:{
          items:1,
         
      },
      600:{
          items:1,
      },
      1000:{
          items:1,
         
      }
  }
})