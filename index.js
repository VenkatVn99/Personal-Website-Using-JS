let myWorkSection = document.querySelector("#my-work");
let myWorkContainer = document.querySelector(".my-works-container");
let myWorkItemsContainer = document.querySelector(".my-work-items-container");
let work = document.querySelector(".work");

const myWorks = [
  {
    image: "work-1.jpg",
    title: "Gig Gadgets",
    description:
      "As a UI/UX designer, I led the redesign of an e-commerce website to enhance user experience and boost conversion rates. My responsibilities included conducting user research to understand pain points and preferences, creating user personas, and developing customer journey maps. I began the design process by creating wireframes to outline the structure and layout, followed by designing high-fidelity prototypes using Figma. The goal was to streamline the shopping process, making it intuitive and user-friendly, while also enhancing the visual appeal to reflect the brand's identity. I ensured the design was fully responsive for a seamless experience across all devices. After conducting usability testing and gathering feedback, I made necessary adjustments and collaborated closely with developers to ensure accurate implementation. This project highlights my ability to blend research, design, and collaboration to create an effective and aesthetically pleasing e-commerce platform. The final design not only improved the overall user experience but also contributed to a significant increase in user engagement and sales conversion rates, demonstrating the impact of thoughtful and user-centered design.",
  },
  {
    image: "work-2.png",
    title: "Gigzters",
    description:
      "As a UI/UX designer, I led the redesign of an educational website aimed at improving user engagement and accessibility. My responsibilities included conducting extensive user research to understand the needs and preferences of students, educators, and parents. I developed user personas and created detailed customer journey maps to guide the design process. Starting with wireframes, I established the structure and layout of key pages, and then progressed to designing high-fidelity prototypes using Figma. The primary goal was to create an intuitive and user-friendly interface that facilitated easy access to educational resources and information. I ensured the design was visually appealing and consistent with the institution's branding, while also being fully responsive for a seamless experience across all devices. Through usability testing, I gathered valuable feedback, made necessary adjustments, and collaborated with developers to ensure the design was implemented accurately. This project showcases my ability to integrate research, design, and collaboration to develop an effective and engaging educational platform. The final design not only enhanced the overall user experience but also significantly increased user interaction and satisfaction, demonstrating the value of a user-centered approach in educational web design.",
  },
  {
    image: "work-3.jpeg",
    title: "Chef's Special",
    description:
      "As a UI/UX designer, I led the redesign of a restaurant website to enhance user experience and drive online reservations. My responsibilities included conducting thorough user research to understand the preferences and behaviors of diners. I developed user personas and detailed customer journey maps to inform the design process. I began by creating wireframes to establish the structure and layout of key pages, followed by designing high-fidelity prototypes using Figma. The primary goal was to create an intuitive, visually appealing, and user-friendly interface that effectively showcased the restaurant's menu, ambiance, and unique offerings. I ensured the design was fully responsive for a seamless experience across all devices. After conducting usability testing and gathering feedback, I made necessary adjustments and collaborated closely with developers to ensure accurate implementation. This project highlights my ability to combine research, design, and collaboration to create an engaging and functional restaurant website. The final design not only improved the overall user experience but also led to a significant increase in online reservations and customer engagement, showcasing the impact of thoughtful and user-centered design.",
  },
];

const displayWorkDetails = (index) => {
  work.innerHTML = "";

  let workImg = document.createElement("img");
  workImg.src = myWorks[index].image;
  workImg.classList.add("work-img");

  let workTitle = document.createElement("h2");
  workTitle.classList.add("work-title");
  workTitle.innerText = myWorks[index].title;

  let workDescription = document.createElement("p");
  workDescription.classList.add("work-description");
  workDescription.innerText = myWorks[index].description;

  work.appendChild(workImg);
  work.appendChild(workTitle);
  work.appendChild(workDescription);

  myWorkSection.appendChild(work);
};

const myWorkItems = document.querySelectorAll(".work-item");
displayWorkDetails(0);
myWorkItems[0].classList.add("active");

myWorkItems.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    item.classList.toggle("active");

    myWorkItems.forEach((workItem, i) => {
      if (i !== index) {
        workItem.classList.remove("active");
      }
    });

    displayWorkDetails(index);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const skills = [
    { name: "Figma", level: "90%" },
    { name: "Adobe XD", level: "80%" },
    { name: "Sketch", level: "80%" },
    { name: "Adobe Photoshop", level: "100%" },
    { name: "Adobe After Effects", level: "90%" },
    { name: "HTML", level: "100%" },
    { name: "CSS", level: "100%" },
    { name: "JavaScript", level: "80%" },
  ];

  let skillsContainer = document.querySelector(".skills-container");
  skillsContainer.classList.add("skills-container");

  skills.forEach((skill) => {
    const barContainer = document.createElement("div");
    barContainer.className = "bar-con";

    const barItems = document.createElement("div");
    barItems.className = "bar-items";

    const skillName = document.createElement("p");
    skillName.textContent = skill.name;

    const skillLevel = document.createElement("p");
    skillLevel.textContent = skill.level;

    barItems.appendChild(skillName);
    barItems.appendChild(skillLevel);

    const bar = document.createElement("div");
    bar.className = "bar";

    const barBg = document.createElement("div");
    barBg.className = "bar-bg";
    barBg.style.width = skill.level;

    bar.appendChild(barBg);
    barContainer.appendChild(barItems);
    barContainer.appendChild(bar);

    skillsContainer.appendChild(barContainer);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let contactSection = document.querySelector("#contact-me");
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-con");
  const contactMainHeading = document.createElement("h1");

  contactMainHeading.innerText = "Let's Start the Project Together";
  contactMainHeading.classList.add("contact-main-heading");

  contactContainer.appendChild(contactMainHeading);
  contactSection.appendChild(contactContainer);

  // Create form container div
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  // Create form element
  const form = document.createElement("form");
  form.id = "contactForm";

  // Create Name input field
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name";
  nameLabel.classList.add("name-label");
  const nameInput = document.createElement("input");
  nameInput.classList.add("inputs");
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.name = "name";
  nameInput.required = true;

  // Create Email input field
  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.classList.add("name-label");
  emailLabel.textContent = "Email";
  const emailInput = document.createElement("input");
  emailInput.classList.add("inputs");
  emailInput.type = "email";
  emailInput.id = "email";
  emailInput.name = "email";
  emailInput.required = true;

  // Create Phone input field
  const phoneLabel = document.createElement("label");
  phoneLabel.setAttribute("for", "phone");
  phoneLabel.classList.add("name-label");
  phoneLabel.textContent = "Phone";
  const phoneInput = document.createElement("input");
  phoneInput.classList.add("inputs");
  phoneInput.type = "tel";
  phoneInput.id = "phone";
  phoneInput.name = "phone";
  phoneInput.required = true;

  // Create Submit button
  const submitBtn = document.createElement("input");
  submitBtn.classList.add("submit-btn");
  submitBtn.type = "submit";
  submitBtn.value = "Submit";

  // Append elements to form
  form.appendChild(nameLabel);
  form.appendChild(document.createElement("br"));
  form.appendChild(nameInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(emailLabel);
  form.appendChild(document.createElement("br"));
  form.appendChild(emailInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(phoneLabel);
  form.appendChild(document.createElement("br"));
  form.appendChild(phoneInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(submitBtn);

  // Append form to form container
  formContainer.appendChild(form);
  contactContainer.appendChild(formContainer);
  contactSection.appendChild(contactContainer);
});
