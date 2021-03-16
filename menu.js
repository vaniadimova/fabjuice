const menu = [
  { id: 1,
    title: "Kale & Apple",
    category: "drink",
    price: 4.99,
    img:"./img/kale.png",
    desc: "This is a photosynthetic health giant, chlorophyll, as it brings its verdant, nutritive power to your glass.",
  }, 
  {
    id: 2,
    title: "Spinach & Lemons",
    category: "drink",
    price: 4.99,
    img:"./img/lem.jpeg",
    desc: "Source of vitamin K, vitamin A, vitamin C and folate, source of manganese, magnesium, iron and vitamin B2.",
  },
  {
    id: 3,
    title: "Cellery Fresh",
    category: "drink",
    price: 6.99,
    img:"./img/mix.jpg",
    desc: " Both celery and cucumber are known to be great vegetables for cooling, energizing, and refreshing.",
  },
  {
    id: 4,
    title: "Chard",
    category: "drink",
    price: 7.99,
    img:"./img/spinach.png",
    desc: "Swiss chard has Vitamin C & A, Vitamin K, Magnesium, Manganese, Potassium , B vitamins, Iron,  and Calcium.",
  },
  {
    id: 5,
    title: "Grand Seven",
    category: "drink",
    price: 7.99,
    img:"./img/kiwi.jpeg",
    desc: "Cupcake ipsum dolor. Sit amet sesame snaps sugar plum apple pie.",
  },
  {
    id: 6,
    title: "Tea",
    category: "drink",
    price: 4.99,
    img:"./img/tea.png",
    desc: "Cupcake ipsum dolor. Sit amet sesame snaps sugar plum apple pie.",
  },
  {
    id: 7,
    title: "Pumpkin Spice Latte",
    category: "drink",
    price: 7.99,
    img:"./img/pumpkin-spice.png",
    desc: "Cupcake ipsum dolor. Sit amet sesame snaps sugar plum apple pie.",
  }, 
  {
    id: 8,
    title: "Chocolate Cake",
    category: "snack",
    price: 7.99,
    img:"./img/cake.png",
    desc: "Cupcake ipsum dolor. Sit amet sesame snaps sugar plum apple pie.",
  },
  {
    id: 9,
    title: "Cakepop",
    category: "snack",
    price: 3.99,
    img:"./img/cakepop.png",
    desc: "Cupcake ipsum dolor. Sit amet sesame snaps sugar plum apple pie.",
  },
  {
    id: 10,
    title: "Croissant",
    category: "snack",
    price: 4.99,
    img:"./img/croissant.png",
    desc: "Cupcake ipsum dolor. Sit amet sesame snaps sugar plum apple pie.",
  },
  {
    id: 11,
    title: "Cupcake",
    category: "snack",
    price: 4.99,
    img:"./img/cupcake.png",
    desc: "Cupcake ipsum dolor. Sit amet sesame snaps sugar plum apple pie.",
  },
  {
    id: 12,
    title: "Muffin",
    category: "snack",
    price: 4.99,
    img:"./img/muffin.png",
    desc: "Cupcake ipsum dolor. Sit amet sesame snaps sugar plum apple pie.",
  },
  {
    id: 13,
    title: "Pie",
    category: "snack",
    price: 4.99,
    img:"./img/pie.png",
    desc: "Cupcake ipsum dolor. Sit amet sesame snaps sugar plum apple pie.",
  },
  {
    id: 14,
    title: "Breakfast Delight",
    category: "meal",
    price: 7.99,
    img:"./img/delight.png",
    desc: "Cupcake ipsum dolor. Sit amet sesame snaps sugar plum apple pie.",
  },
  {
    id: 15,
    title: "Salad",
    category: "meal",
    price: 11.99,
    img:"./img/salad.png",
    desc: "Cupcake ipsum dolor. Sit amet sesame snaps sugar plum apple pie.",
  },
  {
    id: 16,
    title: "Sandwhich",
    category: "meal",
    price: 10.99,
    img:"./img/sandwhich.png",
    desc: "Cupcake ipsum dolor. Sit amet sesame snaps sugar plum apple pie.",
  },
  {
    id: 17,
    title: "Soup",
    category: "meal",
    price: 7.99,
    img:"./img/soup.png",
    desc: "Cupcake ipsum dolor. Sit amet sesame snaps sugar plum apple pie.",
  },
];

//selectors 
const navIcon = document.querySelector('.fas');
const navbar = document.querySelector('.nav');
const menuSection = document.querySelector('.item-section');
const closeBtn = document.querySelector('.close-btn');

//TOGGLE NAV
navIcon.addEventListener('click', function() {
  navbar.classList.toggle("shownav");
});

//DYNAMICALLY SHOW MENU ITEMS 
window.addEventListener('DOMContentLoaded', function() {
  displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<div class="item">
      <img src=${item.img} alt="" class="item-img">
      <div class="item-text">
        <h3 class="item-title">${item.title}</h3>
        <p class="item-desc">${item.desc}</p>
        <p class="item-price">$${item.price}</p>
      </div>
    </div>`
  });
  displayMenu = displayMenu.join("");
  menuSection.innerHTML = displayMenu;
};


//FILTER MENU ITEMS DEPENDING ON CATEGORY 

const menuFilterButtons = document.querySelectorAll('.menu-item');

menuFilterButtons.forEach(function(btn) {
  btn.addEventListener('click', function (e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      //console.log(category);
      if (menuItem.category === category) {
        return menuItem;
      }
      menuFilterButtons.forEach(function(item) {
        if (item !== btn) {
          item.classList.remove('menu-item-active');
        };
      })
    }); 
    displayMenuItems(menuCategory);
    btn.classList.toggle('menu-item-active');
  });
});

//CLOSE MOBILE NAV
closeBtn.addEventListener('click', function() {
  navbar.classList.remove("shownav");
});

//RESERVE ON CLICK FUNCTIONS 
const timeBtns = document.querySelectorAll('.time-option'); 

timeBtns.forEach(function(timeBtn) {
  timeBtn.addEventListener('click', function(e) {
    timeBtns.forEach(function(timeItem) {
      if(timeItem !== timeBtn) {
        timeItem.classList.remove('activeReserveBtn');
      };
    });
    timeBtn.classList.toggle('activeReserveBtn');
  });
});

const numberBtns = document.querySelectorAll('.number-option');

numberBtns.forEach(function(numberBtn) {
  numberBtn.addEventListener('click', function(e) {
    numberBtns.forEach(function(numberItem) {
      if(numberItem !== numberBtn) {
        numberItem.classList.remove("activeReserveBtn");
      };
    })
    numberBtn.classList.toggle('activeReserveBtn');
  })
})

