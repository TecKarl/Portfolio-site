const projects = [
  {
    title: "Interndo",
    description: "A web application for managing university student internships, built with Django and React",
    image: "Images/interndo.png",
    alt: "Interndo",
    url: "https://github.com/TecKarl/internship-management",
    technologies: ["Django", "React"]
  },  
  {
    title: "Tina's Couture",
    description: "An E-commerce webapp for a local fashion shop with admin and customer roles, and all necessary CRUD functionalities.",
    image: "Images/tinas_couture.png",
    alt: "Tina's Couture",
    url: "https://github.com/TecKarl/tinascouture",
    technologies: ["Django"]
  },
  {
    title: "Portfolio Page",
    description: "Responsive personal portfolio showcasing projects and skills acquired so far.",
    image: "Images/portfolio_page_image.png",
    alt: "Portfolio Website",
    url: "https://github.com/TecKarl/Portfolio-site",
    technologies: ["HTML & CSS", "JavaScript"]
  },
   {
    title: "AI Image Description",
    description: "Image description tool powered by GROQ APIs with a Streamlit interface.",
    image: "Images/streamlit_image.png",
    alt: "AI Image Description Tool",
    url: "https://github.com/TecKarl/ACES-MEETUP",
    technologies: ["Python", "Streamlit", "Groq API"]
  },
  {
    title: "Task Manager App",
    description: "Task Management Web App with CRUD functionalities.",
    image: "Images/task_manager.png",
    alt: "Task Manager Application",
    url: "https://github.com/TecKarl/Full-Stack-Task-Manager-App",
    technologies: ["HTML & CSS", "JavaScript", "FastAPI"]
  },
  {
    title: "Blog App",
    description: "Blog WebApp implemented with Django, featuring Blog uploads and individual Blog Posts.",
    image: "Images/django_blog.png",
    alt: "Django Blog Application",
    url: "https://github.com/TecKarl/django-blog",
    technologies: ["Django", "HTML & CSS"]
  }
];

const designs = [
  { image: "Images/multimedia_images/citation_image.jpg", alt: "Citation design" },
  { image: "Images/multimedia_images/Couture_design(finalized).jpg", alt: "Couture design" },
  { image: "Images/multimedia_images/Pax_inspired2.jpg", alt: "Pax inspired design" },
  { image: "Images/multimedia_images/second_assigment_retouched.jpg", alt: "Practice design" },
  { image: "Images/multimedia_images/students_mass_flyer.jpg", alt: "Students mass flyer design" },
  { image: "Images/multimedia_images/students_mass_flyer_color_changed.jpg", alt: "Color variation flyer design" }
];

const projectsGrid = document.querySelector("#projects-grid");
const designsGrid = document.querySelector("#designs-grid");
const projectsShowMore = document.querySelector("#projects-show-more");
const projectsShowLess = document.querySelector("#projects-show-less");
const designsShowMore = document.querySelector("#designs-show-more");
const designsShowLess = document.querySelector("#designs-show-less");
const imageModal = document.querySelector("#image-modal");
const modalImage = document.querySelector("#modal-image");
const closeModalButton = document.querySelector("#close-modal");

function technologyTags(technologies) {
  return technologies
    .map((technology) => `<span class="px-3 py-1 bg-gray-600 bg-opacity-50 rounded-full text-xs text-gray-200">${technology}</span>`)
    .join("");
}

function renderProjects(showAll = false) {
  projectsGrid.innerHTML = (showAll ? projects : projects.slice(0, 3))
    .map(
      (project) => `
        <article class="group bg-slate-800 bg-opacity-50 backdrop-blur rounded-xl overflow-hidden hover:bg-opacity-80 transition-all duration-300 hover:-translate-y-2">
          <div class="aspect-video overflow-hidden bg-slate-900">
            <a href="${project.url}" target="_blank" rel="noreferrer" class="block h-full">
              <img src="${project.image}" alt="${project.alt}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
          <div class="p-6 space-y-4">
            <h3 class="text-xl font-bold">${project.title}</h3>
            <p class="text-gray-300 text-sm">${project.description}</p>
            <div class="flex flex-wrap gap-2">${technologyTags(project.technologies)}</div>
            <a href="${project.url}" target="_blank" rel="noreferrer" class="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors mt-2">
              View on GitHub <i class="fab fa-github ml-2" aria-hidden="true"></i>
            </a>
          </div>
        </article>`
    )
    .join("");
}

function renderDesigns(showAll = false) {
  designsGrid.innerHTML = (showAll ? designs : designs.slice(0, 3))
    .map(
      (design) => `
        <article class="bg-slate-800 bg-opacity-50 backdrop-blur rounded-xl overflow-hidden">
          <button type="button" class="design-image-button block w-full aspect-[4/3] bg-slate-900" data-image="${design.image}" data-alt="${design.alt}" aria-label="View ${design.alt} full screen">
            <img src="${design.image}" alt="${design.alt}" class="w-full h-full object-cover" />
          </button>
          <a href="${design.image}" download class="flex items-center justify-center p-4 text-gray-300 hover:text-cyan-400 transition-colors" aria-label="Download ${design.alt}">
            <i class="fas fa-download text-lg" aria-hidden="true"></i>
          </a>
        </article>`
    )
    .join("");
}

function openImageModal(image, alt) {
  modalImage.src = image;
  modalImage.alt = alt;
  imageModal.classList.remove("hidden");
  imageModal.classList.add("flex");
  document.body.classList.add("overflow-hidden");
}

function closeImageModal() {
  imageModal.classList.add("hidden");
  imageModal.classList.remove("flex");
  document.body.classList.remove("overflow-hidden");
}

renderProjects();
renderDesigns();

projectsShowMore.addEventListener("click", () => {
  renderProjects(true);
  projectsShowMore.classList.add("hidden");
  projectsShowLess.classList.remove("hidden");
});

projectsShowLess.addEventListener("click", () => {
  renderProjects();
  projectsShowLess.classList.add("hidden");
  projectsShowMore.classList.remove("hidden");
});

designsShowMore.addEventListener("click", () => {
  renderDesigns(true);
  designsShowMore.classList.add("hidden");
  designsShowLess.classList.remove("hidden");
});

designsShowLess.addEventListener("click", () => {
  renderDesigns();
  designsShowLess.classList.add("hidden");
  designsShowMore.classList.remove("hidden");
});

designsGrid.addEventListener("click", (event) => {
  const imageButton = event.target.closest(".design-image-button");
  if (imageButton) {
    openImageModal(imageButton.dataset.image, imageButton.dataset.alt);
  }
});

closeModalButton.addEventListener("click", closeImageModal);
