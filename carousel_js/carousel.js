const left = document.getElementById("left");
const right = document.getElementById("right");
const carousel = document.getElementById("carousel-box");
const category = document.getElementById("category");

var withToScroll = carousel.offsetWidth / 4;

const data = [
  {
    name: "BrandingConsultation ",
    products: [
      {
        name: "Digital Branding",
        price: 7999,
        path: "Digital_Branding.html",
      },
      {
        name: "Traditional Branding (Offline)",
        price: 7999,
        path: "Traditional_Branding_(Offline).html",
      },
      {
        name: "Trending and Response-Generative Branding Campaigns",
        price: 7999,
        path: "Trending_and_Response_Generative_Branding_Campaigns.html",
      },
    ],
  },
  {
    name: "MarketingConsultation ",
    products: [
      {
        name: "Digital Marketing",
        price: 1599,
        path: "Digital_Marketing.html",
      },
      {
        name: "Traditional Marketing (Offline)",
        price: 5400,
        path: "hdd.html",
      },
      {
        name: "Trending and Response-Generative Campaigns",
        price: 599,
        path: "mouse.html",
      },
      {
        name: "Guerrilla Marketing",
        price: 599,
        path: "mouse.html",
      },
    ],
  },
  {
    name: "Public Relations (PR)",
    products: [
      {
        name: "Media Relations",
        price: 80000,
        path: "inphone12.html",
      },
      {
        name: "Community Relations",
        price: 13450,
        path: "infinixnote11s.html",
      },
      {
        name: "Crisis Communication",
        price: 49000,
        path: "samsungs3.html",
      },
      {
        name: "Influencer Relations",
        price: 49000,
        path: "samsungs3.html",
      },
      {
        name: "Digital PR",
        price: 49000,
        path: "samsungs3.html",
      },
      {
        name: "Event PR",
        price: 49000,
        path: "samsungs3.html",
      },
      {
        name: "Employee Relations",
        price: 49000,
        path: "samsungs3.html",
      },
      {
        name: "Trending and Response-Generative PR Campaigns",
        price: 49000,
        path: "samsungs3.html",
      },
    ],
  },
  {
    name: "Image Consultation",
    products: [
      {
        name: "Personal Image Consultation",
        price: 80000,
        path: "inphone12.html",
      },
      {
        name: "Corporate Image Consultation",
        price: 13450,
        path: "infinixnote11s.html",
      },
    ],
  },
  {
    name: "Event Management and Planning",
    products: [
      {
        name: "Offline Events",
        price: 80000,
        path: "inphone12.html",
      },
      {
        name: "Online Events",
        price: 13450,
        path: "infinixnote11s.html",
      },
      {
        name: "Trending and Response-Generative Event Campaigns",
        price: 49000,
        path: "samsungs3.html",
      },
    ],
  },
  {
    name: "Ghost Writing Services",
    products: [
      {
        name: "Offline Writing Services",
        price: 80000,
        path: "inphone12.html",
      },
      {
        name: "Online Writing Services",
        price: 13450,
        path: "infinixnote11s.html",
      },
      {
        name: "Samsung S3",
        price: 49000,
        path: "samsungs3.html",
      },
    ],
  },
];

var isFirst = true;

data.forEach((cat) => {
  let option = document.createElement("option");
  option.id = cat.name;
  let text = document.createTextNode(cat.name);
  option.appendChild(text);
  option.setAttribute("value", cat.name);

  if (isFirst) {
    option.setAttribute("selected", true);
    isFirst = false;
  }
  category.appendChild(option);
});

// Create carousel item dynamically
const appendCarouselItems = (cat_name, product) => {
  let parent = document.createElement("div");
  parent.setAttribute("class", "carousel-item");

  let child = document.createElement("div");
  child.setAttribute("class", "item");

  let p_name = document.createElement("p");
  p_name.appendChild(document.createTextNode(`Name: ${product.name}`));
  child.appendChild(p_name);

  let p_price = document.createElement("p");
  p_price.appendChild(document.createTextNode(`Price: ${product.price}`));
  child.appendChild(p_price);

  let a = document.createElement("a");
  let path = `/category/${cat_name}/${product.path}`.replace(/\s/g, "");
  a.setAttribute("href", path);
  a.appendChild(document.createTextNode("See more..."));
  child.appendChild(a);

  parent.appendChild(child);

  carousel.appendChild(parent);
};

const firstTime_Append_CarouselItem = () => {
  carousel.innerHTML = "";
  data[0].products.forEach((product) => {
    appendCarouselItems(data[0].name, product);
  });
};

// Create the carousel on first page loads
firstTime_Append_CarouselItem();

category.addEventListener("change", (e) => {
  carousel.innerHTML = "";
  data.forEach((cat) => {
    cat.name === e.target.value &&
      cat.products.forEach((product) => {
        appendCarouselItems(cat.name, product);
      });
  });
});

left.addEventListener("click", () => {
  setTimeout(() => {
    carousel.scrollLeft += withToScroll;
  }, 100);
});

right.addEventListener("click", () => {
  setTimeout(() => {
    carousel.scrollLeft += -withToScroll;
  }, 100);
});
