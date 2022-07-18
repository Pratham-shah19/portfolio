const skillsSection = document.querySelector(".skills");

const images = [
  "Python.jpg",
  "C%2B%2B.jpg",
  "Express.png",
  "Firebase.jpg",
  "GitHub.jpg",
  "Java.jpg",
  "Mongodb.png",
  "Node.png",
  "React.png",
  "VS Code.jpg",
];
const carousel = document.createElement("div");
carousel.classList.add("carousel");
images.forEach((e) => {
  const skill = document.createElement("div");
  skill.innerHTML = `<img src="https://raw.githubusercontent.com/Pratham-shah19/portfolio/main/images/${e}"/>`;
  skill.classList.add("skill");
  carousel.appendChild(skill);
});
skillsSection.appendChild(carousel);
