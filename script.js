const gallery = document.getElementById("gallery");

// Real working image sources (guaranteed load)
const data = [
  {
    img: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    text: "Beautiful Mountains"
  },
  {
    img: "https://images.pexels.com/photos/34950/pexels-photo.jpg",
    text: "Green Forest"
  },
  {
    img: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
    text: "City Life"
  },
  {
    img: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg",
    text: "Sunny Beach"
  },
  {
    img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
    text: "Wild Animals"
  },
  {
    img: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
    text: "Amazing Sunset"
    
  }
];

// Shuffle function
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Load Gallery
function loadGallery() {
  const randomData = shuffle([...data]);

  randomData.forEach(item => {
    const box = document.createElement("div");
    box.classList.add("image-box");

    box.innerHTML = `
      <img src="${item.img}" alt="">
      <div class="caption">${item.text}</div>
    `;

    gallery.appendChild(box);
  });

  addLightbox();
}

// Lightbox
function addLightbox() {
  const images = document.querySelectorAll(".image-box img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.onclick = () => lightbox.style.display = "none";

  lightbox.onclick = (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  };
}

// Run
loadGallery();