// Toggle navigation menu visibility
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburgerButton.addEventListener("click", () => {
  const isVisible = navMenu.style.display === "block";
  navMenu.style.display = isVisible ? "none" : "block";

  // Change the hamburger symbol to 'X' when menu is visible
  hamburgerButton.textContent = isVisible ? "☰" : "✖";
});

// Set the current year in the footer
const currentYearSpan = document.getElementById("current-year");
currentYearSpan.textContent = new Date().getFullYear();

// Set the last modified date in the footer
const lastModifiedSpan = document.getElementById("last-modified");
lastModifiedSpan.textContent = document.lastModified;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/320x200/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/320x200/tokyo_japan_temple-recommend-desk.jpeg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Calgary Alberta",
    location: "9802 Rocky Ridge Rd NW Calgary AB T3G 5J7 Canada",
    dedicated: "28 October 2012",
    area: 33000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/400x250/calgary-albert-temple-lds-1059122-wallpaper.jpg"
  },
  {
    templeName: "Recife, Brazil",
    location: "Recife, Pernambuco, Brazil",
    dedicated: "15 December 2000",
    area: 37200,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/recife-brazil/400x250/recife-brazil-temple-lds-700226-wallpaper.jpg"
  },
  {
    templeName: "Perth Australia",
    location: "Yokine, Western Australia, Australia",
    dedicated: "20 May 2001",
    area: 	10700,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/perth-australia/400x250/perth-australia-temple-1562613-wallpaper.jpg"
  }

];

// Function to filter and display temples
function displayTemples(filter) {
  const templeCardsContainer = document.getElementById("temple-cards");
  templeCardsContainer.innerHTML = ""; // Clear the current display

  let filteredTemples;

  switch (filter) {
    case "old":
      filteredTemples = temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() < 1900
      );
      break;
    case "new":
      filteredTemples = temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() > 2000
      );
      break;
    case "large":
      filteredTemples = temples.filter((temple) => temple.area > 90000);
      break;
    case "small":
      filteredTemples = temples.filter((temple) => temple.area < 10000);
      break;
    default: // "all" or unknown filter
      filteredTemples = temples;
      break;
  }

  // Generate temple cards
  filteredTemples.forEach((temple) => {
    const templeCard = document.createElement("div");
    templeCard.className = "temple-card";

    templeCard.innerHTML = `
      <figure>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <figcaption>${temple.templeName}</figcaption>
      </figure>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq. ft.</p>
    `;

    templeCardsContainer.appendChild(templeCard);
  });
}

// Event listener for navigation menu
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior
    const filter = link.getAttribute("data-filter");
    displayTemples(filter); // Call the display function with the selected filter
  });
});

// Display all temples by default on page load
displayTemples("all");
