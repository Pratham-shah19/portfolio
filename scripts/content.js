const skillsSection = document.querySelector(".skills");

const images = [
  "Python.jpg",
  "C++.jpg",
  "Express.png",
  "Firebase.jpg",
  "Github.jpg",
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
  skill.innerHTML = `<img src="./images/${e}"/>`;
  skill.classList.add("skill");
  carousel.appendChild(skill);
});
skillsSection.appendChild(carousel);
