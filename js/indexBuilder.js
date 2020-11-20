const bio = {
  name: "Blake Hobratschk",
  role: "Front-End Developer / Javascript",
  contacts: {
    mobile: "832-640-8157",
    email: "hobratschkbl@gmail.com",
    location: "Covington, LA",
    github: "https://github.com/hobratschk",
  },
  biopic: "images/resume-img.jpg",
  skills: [
    "JavaScript",
    "React",
    "Redux",
    "TypeScript",
    "Collaboration",
    "Being a easy-going badass with a real sense of teamwork.",
  ],
  display: function () {
    const formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    const formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName, formattedRole);
    const formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for (index = 0; index < bio.skills.length; index++) {
        const formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
        $("#skills").append(formattedSkill);
      }
    }
  },
};

bio.display();
