// Data
const projectsData = [
  {
    id: 1,
    title: "Todo Application",
    description:
      "A comprehensive task management application with features like add, edit, delete, and mark tasks as complete. Built with modern web technologies for efficient task organization.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop&auto=format",
    category: "web",
    tags: ["HTML", "CSS", "JavaScript", "Local Storage", "Responsive"],
    github: "https://github.com/yourusername/todo-app",
    demo: "https://your-todo-app.vercel.app",
    date: "2024",
    status: "Completed",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website showcasing my projects, skills, and experience. Built from scratch using pure HTML, CSS, and JavaScript without any frameworks.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop&auto=format",
    category: "web",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Animations"],
    github: "https://github.com/Niku17/MyPortfolio",
    demo: "https://your-portfolio.vercel.app",
    date: "2024",
    status: "Completed",
  },
  {
    id: 3,
    title: "Medivana - Medical Assistant",
    description:
      "An intelligent medical assistant that classifies symptoms and provides medicine recommendations using a combination of Random Forest and Logistic Regression algorithms. Features high accuracy diagnosis through ensemble ML techniques.",
    image: "medivana.png",
    category: "ml",
    tags: ["Python", "Machine Learning", "Random Forest", "Logistic Regression", "Flask", "Classification"],
    github: "https://github.com/Niku17/Medivana",
    demo: "https://medivana-demo.vercel.app",
    date: "2024",
    status: "Completed",
  },
  {
    id: 4,
    title: "Google Maps Shortest Path Finder",
    description:
      "Implementation of Dijkstra's algorithm to find the shortest distance between two points on Google Maps. Features interactive map interface with route visualization and distance calculation.",
    image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=500&h=300&fit=crop&auto=format",
    category: "algorithm",
    tags: ["JavaScript", "Google Maps API", "Dijkstra Algorithm", "Graph Theory", "HTML", "CSS"],
    github: "https://github.com/yourusername/shortest-path",
    demo: "https://shortest-path-demo.vercel.app",
    date: "2024",
    status: "Completed",
  },
]

const hobbiesData = [
  {
    id: 1,
    title: "Solving SRT Problems",
    description:
      "I enjoy tackling Situation Reaction Tests (SRT) which help improve logical thinking and decision-making skills.",
    icon: "fas fa-brain",
    activities: ["Logical Reasoning", "Problem Solving", "Critical Thinking", "Decision Making"],
    stats: "500+ Problems Solved",
  },
  {
    id: 2,
    title: "Learning New Technologies",
    description:
      "Constantly exploring emerging technologies, frameworks, and programming languages to stay updated with industry trends.",
    icon: "fas fa-laptop-code",
    activities: ["Web Development", "Machine Learning", "Mobile Development", "Cloud Computing"],
    stats: "15+ Technologies Learned",
  },
  {
    id: 3,
    title: "Listening to Music",
    description:
      "Music is my companion during coding sessions and helps me stay focused and motivated throughout the day.",
    icon: "fas fa-music",
    activities: ["Pop", "Electronic", "Lo-fi", "Instrumental"],
    stats: "1000+ Songs in Playlist",
  },
]

const educationData = [
  {
    id: 1,
    institution: "Delhi Technological University (DTU)",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Information Technology",
    duration: "2023 - 2027",
    status: "Pursuing",
    grade: "8.939 CGPA",
    location: "Delhi, India",
    description:
      "Currently pursuing B.Tech in Information Technology with focus on software development, data structures, algorithms, and emerging technologies.",
    semesters: [
      {
        semester: "Semester 1",
        sgpa: "8.2",
        subjects: [
          { name: "Mathematics-I", grade: "A", credits: 4, stream: "Core" },
          { name: "Ee", grade: "A", credits: 4, stream: "Core" },
          { name: "Ece", grade: "A+", credits: 4, stream: "Core" },
          { name: "Fundamentals of Web Design", grade: "A+", credits: 2, stream: "IT" },
          { name: "Programming Fundamentals(c)", grade: "A+", credits: 4, stream: "IT" },
          { name: "Spoken Skills in English", grade:'A+', credits:2, stream:"Aec/Vac"}
        ],
      },
      {
        semester: "Semester 2",
        sgpa: "9.3",
        subjects: [
          { name: "Mathematics-II", grade: "O", credits: 4, stream: "Core" },
          { name: "Discrete Structures", grade: "O", credits: 4, stream: "IT" },
          { name: "Physiscs", grade: "A", credits: 4, stream: "Core" },
          { name: "Open Source Programming(Pyhton)", grade: "A+", credits: 2, stream: "Core" },
          { name: "Object Oriented Programming", grade: "O", credits: 4, stream: "IT" },
          { name: "Technical communication" ,grade:'A', Credits:2, stream:"Aec/Vac"}
        ],
      },
      {
        semester: "Semester 3",
        sgpa: "8.92",
        subjects: [
          { name: "Digital Systems and Microcontrollers", grade: "A+", credits: 4, stream: "core" },
          { name: "Data Communication", grade: "A", credits: 4, stream: "IT" },
          { name: "Data Structures", grade: "A+", credits: 4, stream: "IT" },
          { name: "Data Science and Visualization", grade: "A+", credits: 4, stream: "Core" },
          { name: "Principle Of Computing", grade: "A+", credits: 4, stream: "IT" },
          { name: "Meditation and conscious living", grade: "O" ,credits: 2,stream:"Aec/Vac"}
        ],
      },
    ],
    achievements: [
      "Participated in multiple hackathons",
      "Volunteer for technical events",
    ],
    projects: [
      "Project on AI-based Healthcare System",
      "Web Development Internship Project",
      "Machine Learning Research Paper",
    ],
  },
  {
    id: 2,
    institution: "Maharaja Agarsain Public School, Bawana",
    degree: "Senior Secondary (12th)",
    field: "Science (PCM with Computer Science)",
    duration: "2021 - 2022",
    status: "Completed",
    grade: "97.2%",
    location: "Delhi, India",
    description:
      "Completed senior secondary education with Science stream, focusing on Physics, Chemistry, Mathematics, and Computer Science.",
    subjects: [
      { name: "Physics", grade: "95%" },
      { name: "Chemistry", grade: "99%" },
      { name: "Mathematics", grade: "98%" },
      { name: "Computer Science", grade: "97%" },
      { name: "English", grade: "95%" },
      { name: "Physical Education", grade: "98%"},
    
    ],
    achievements: [
      "School Topper in Computer Science",
      "Merit Certificate for Academic Excellence",
      "Active participant in Science Club",
      "Led the Computer Science Club",
    ],
  },
  {
    id: 3,
    institution: "Maharaja Agarsain Public School, Bawana",
    degree: "Secondary (10th)",
    field: "All Subjects",
    duration: "2019 - 2020",
    status: "Completed",
    grade: "93%",
    location: "Delhi, India",
    description:
      "Completed secondary education with excellent grades across all subjects, laying a strong foundation for higher studies.",
    subjects: [
      { name: "Mathematics", grade: "93%" },
      { name: "Science", grade: "97%" },
      { name: "Social Science", grade: "95%" },
      { name: "English", grade: "75%"},
      { name: "Hindi", grade: "86%" },
      { name: "Sanskrit", grade: "95%"},
    ],
    achievements: [
      "School Topper in Science",
      "Perfect attendance award",
      "Active member of Science Club",
      "Participated in inter-school competitions",
    ],
  },
]

const skillsData = {
  programming: [
    { name: "C++", level: "Advanced", percentage: 90, category: "System" },
    { name: "C", level: "Advanced", percentage: 90, category: "System" },
    { name: "Python", level: "Intermediate", percentage: 80, category: "Scripting" },
    { name: "JavaScript", level: "Intermediate", percentage: 75, category: "Web" },
  ],
  web: [
    { name: "HTML5", level: "Advanced", percentage: 95, category: "Markup" },
    { name: "CSS3", level: "Advanced", percentage: 90, category: "Styling" },
    { name: "Bootstrap", level: "Intermediate", percentage: 80, category: "Framework" },
    { name: "React.js", level: "Intermediate", percentage: 70, category: "Framework" },
    { name: "Node.js", level: "Beginner", percentage: 60, category: "Backend" },
  ],
  ml: [
    { name: "Machine Learning", level: "Intermediate", percentage: 75, category: "AI" },
    { name: "Artificial Neural Networks", level: "Intermediate", percentage: 70, category: "Deep Learning" },
    { name: "Convolutional Neural Networks", level: "Beginner", percentage: 65, category: "Deep Learning" },
    { name: "Recurrent Neural Networks", level: "Beginner", percentage: 60, category: "Deep Learning" },
    { name: "Generative AI", level: "Beginner", percentage: 55, category: "AI" },
  ],
  tools: [
      // Programming Languages
  "Python",
  "JavaScript",
  "C++",
  "C",
  "HTML",
  "CSS",


  // Development Tools
  "VS Code",
  "PyCharm",
  "Jupyter Notebook",
  "Git & GitHub",
  "Postman",

  // Web Development
  "Node.js",
  "Express.js",
  "EJS",
  "React.js",

  // Databases
  "MySQL",
  "MongoDB",

  // AI Skills
  "Machine Learning",
  "Natural Language Processing (NLP)",
  "Generative AI (GenAI)",

  // Design & UI
  "Figma",
  ],
}

const certifications = [
  {
    name: "Machine Learning Course",
    issuer: "Udemy",
    date: "2025",
    icon: "🤖",
    description:
      "Comprehensive course covering supervised and unsupervised learning, neural networks, and practical ML applications",
    skills: ["Python", "Scikit-learn", "TensorFlow", "Data Analysis"],
    certificateUrl: "https://www.udemy.com/certificate/UC-b583a330-b1e9-4b8a-ab3f-077ef9cb4c1a/",
  },
  {
    name: "Web Development Bootcamp (HTML to Node.js)",
    issuer: "Udemy",
    date: "2025",
    icon: "🌐",
    description: "Full-stack web development course covering frontend and backend technologies up to Node.js",
    skills: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mysql", "Boostrap" ,"React"],
    certificateUrl: "https://www.udemy.com/certificate/UC-4427c312-532a-402a-9f89-cc5efe30f07a/",
  },
 
  {
    name: "Python for Data Science",
    issuer: "Udemy",
    date: "2023",
    icon: "🐍",
    description: "Python programming for data analysis, visualization, and machine learning applications",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Analysis"],
    certificateUrl: "https://udemy.com/certificate/your-python-certificate",
  },
]

// DOM Elements
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")
const navLinks = document.querySelectorAll(".nav-link")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation()
  initializeAnimations()
  initializeTypewriter()
  initializeProjects()
  initializeHobbies()
  initializeEducation()
  initializeSkills()
  initializeContactForm()
  createAnimatedBackground()
  initializeScrollAnimations()
})

// Navigation
function initializeNavigation() {
  // Mobile menu toggle
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    navToggle.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
    })
  })

  // Smooth scrolling and active link highlighting
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Update active nav link on scroll
  window.addEventListener("scroll", updateActiveNavLink)
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section")
  const scrollPos = window.scrollY + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
}

// Typewriter Effect
function initializeTypewriter() {
  const roles = ["Student", "Developer", "Tech Enthusiast", "Problem Solver"]
  const roleElement = document.getElementById("role-text")
  let roleIndex = 0
  let charIndex = 0
  let isDeleting = false

  function typeWriter() {
    const currentRole = roles[roleIndex]

    if (isDeleting) {
      roleElement.textContent = currentRole.substring(0, charIndex - 1)
      charIndex--
    } else {
      roleElement.textContent = currentRole.substring(0, charIndex + 1)
      charIndex++
    }

    let typeSpeed = isDeleting ? 50 : 100

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 2000
      isDeleting = true
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      roleIndex = (roleIndex + 1) % roles.length
      typeSpeed = 500
    }

    setTimeout(typeWriter, typeSpeed)
  }

  typeWriter()
}

// Projects
function initializeProjects() {
  const projectsGrid = document.getElementById("projects-grid")
  const filterButtons = document.querySelectorAll(".filter-btn")

  // Render projects
  function renderProjects(projects = projectsData) {
    projectsGrid.innerHTML = ""

    projects.forEach((project, index) => {
      const projectCard = createProjectCard(project)
      projectsGrid.appendChild(projectCard)

      // Animate card appearance
      setTimeout(() => {
        projectCard.classList.add("show")
      }, index * 100)
    })
  }

  // Create project card
  function createProjectCard(project) {
    const card = document.createElement("div")
    card.className = `project-card ${project.category}`
    card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <a href="${project.github}" target="_blank" class="btn btn-outline">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="${project.demo}" target="_blank" class="btn btn-primary">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
                <div class="project-badge">${project.status}</div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-meta">
                    <span><i class="fas fa-calendar"></i> ${project.date}</span>
                    <span><i class="fas fa-tag"></i> ${project.category}</span>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
                </div>
            </div>
        `
    return card
  }

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter")

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      // Filter projects
      const filteredProjects =
        filter === "all" ? projectsData : projectsData.filter((project) => project.category === filter)

      renderProjects(filteredProjects)
    })
  })

  // Initial render
  renderProjects()
}

// Hobbies
function initializeHobbies() {
  const hobbiesGrid = document.getElementById("hobbies-grid")

  hobbiesData.forEach((hobby, index) => {
    const hobbyCard = document.createElement("div")
    hobbyCard.className = "hobby-card"
    hobbyCard.innerHTML = `
            <div class="hobby-icon">
                <i class="${hobby.icon}"></i>
            </div>
            <h3 class="hobby-title">${hobby.title}</h3>
            <p class="hobby-description">${hobby.description}</p>
            <div class="hobby-activities">
                ${hobby.activities.map((activity) => `<span class="hobby-activity">${activity}</span>`).join("")}
            </div>
        `

    hobbiesGrid.appendChild(hobbyCard)

    // Animate card appearance
    setTimeout(() => {
      hobbyCard.classList.add("show")
    }, index * 150)
  })
}

// Education
function renderCertifications() {
  const certGrid = document.getElementById("cert-grid")

  certifications.forEach((cert, index) => {
    const certCard = document.createElement("div")
    certCard.className = "cert-card"
    certCard.innerHTML = `
      <div class="cert-icon">${cert.icon}</div>
      <div class="cert-content">
        <div class="cert-name">${cert.name}</div>
        <div class="cert-issuer">
          <i class="fas fa-graduation-cap"></i> ${cert.issuer}
        </div>
        <div class="cert-date">
          <i class="fas fa-calendar"></i> ${cert.date}
        </div>
        <div class="cert-description">${cert.description}</div>
        <div class="cert-skills">
          ${cert.skills.map((skill) => `<span class="cert-skill">${skill}</span>`).join("")}
        </div>
        ${
          cert.certificateUrl
            ? `
          <a href="${cert.certificateUrl}" target="_blank" class="cert-link">
            <i class="fas fa-external-link-alt"></i> View Certificate
          </a>
        `
            : ""
        }
      </div>
    `

    certGrid.appendChild(certCard)

    // Animate card appearance
    setTimeout(() => {
      certCard.classList.add("show")
    }, index * 150)
  })
}

function initializeEducation() {
  const educationTimeline = document.getElementById("education-timeline")

  educationData.forEach((education, index) => {
    const educationItem = document.createElement("div")
    educationItem.className = "education-item"

    let semesterContent = ""
    if (education.semesters) {
      semesterContent = `
                <div class="semesters-container">
                    ${education.semesters
                      .map(
                        (semester) => `
                        <div class="semester-card">
                            <div class="semester-header">
                                <h4><i class="fas fa-graduation-cap"></i> ${semester.semester}</h4>
                                <div class="semester-sgpa">SGPA: ${semester.sgpa}</div>
                            </div>
                            <div class="semester-subjects">
                                <h5><i class="fas fa-book"></i> Subjects</h5>
                                <div class="subjects-grid">
                                    ${semester.subjects
                                      .map(
                                        (subject) => `
                                        <div class="subject-item">
                                            <span class="subject-name">${subject.name}</span>
                                            <div class="subject-details">
                                                <span class="subject-grade">${subject.grade}</span>
                                                <span class="subject-credits">${subject.credits} Credits</span>
                                                <span class="subject-stream">${subject.stream}</span>
                                            </div>
                                        </div>
                                    `,
                                      )
                                      .join("")}
                                </div>
                            </div>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            `
    } else if (education.subjects) {
      semesterContent = `
                <div class="school-subjects">
                    <h4><i class="fas fa-book"></i> Subjects & Grades</h4>
                    <div class="subjects-grid">
                        ${education.subjects
                          .map(
                            (subject) => `
                            <div class="subject-item">
                                <span class="subject-name">${subject.name}</span>
                                <div class="subject-details">
                                    <span class="subject-grade">${subject.grade}</span>
                                    
                                </div>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            `
    }

    educationItem.innerHTML = `
            <div class="education-card">
                <div class="education-header">
                    <div>
                        <h3>${education.institution}</h3>
                        <h4>${education.degree} - ${education.field}</h4>
                    </div>
                    <div class="education-grade">${education.grade}</div>
                </div>
                
                <div class="education-meta">
                    <div><i class="fas fa-calendar"></i> ${education.duration}</div>
                    <div><i class="fas fa-map-marker-alt"></i> ${education.location}</div>
                    <div class="education-status">${education.status}</div>
                </div>
                
                <p>${education.description}</p>
                
                ${semesterContent}
                
                <div class="education-achievements">
                    <h4><i class="fas fa-trophy"></i> Achievements</h4>
                    <ul>
                        ${education.achievements.map((achievement) => `<li><i class="fas fa-star"></i> ${achievement}</li>`).join("")}
                    </ul>
                </div>
                
                ${
                  education.projects
                    ? `
                    <div class="education-projects">
                        <h4><i class="fas fa-project-diagram"></i> Key Projects</h4>
                        <ul>
                            ${education.projects.map((project) => `<li>• ${project}</li>`).join("")}
                        </ul>
                    </div>
                `
                    : ""
                }
            </div>
        `

    educationTimeline.appendChild(educationItem)

    // Animate item appearance
    setTimeout(() => {
      educationItem.classList.add("show")
    }, index * 200)
  })

  // Add certification rendering
  renderCertifications()
}

// Skills
function initializeSkills() {
  // Programming Skills
  const programmingSkills = document.getElementById("programming-skills")
  skillsData.programming.forEach((skill) => {
    const skillItem = createSkillItem(skill)
    programmingSkills.appendChild(skillItem)
  })

  // Web Skills
  const webSkills = document.getElementById("web-skills")
  skillsData.web.forEach((skill) => {
    const skillItem = createSkillItem(skill)
    webSkills.appendChild(skillItem)
  })

  // ML Skills
  const mlSkills = document.getElementById("ml-skills")
  skillsData.ml.forEach((skill) => {
    const skillItem = createSkillItem(skill)
    mlSkills.appendChild(skillItem)
  })

  // Tools
  const toolsList = document.getElementById("tools-list")
  skillsData.tools.forEach((tool) => {
    const toolTag = document.createElement("span")
    toolTag.className = "tool-tag"
    toolTag.textContent = tool
    toolsList.appendChild(toolTag)
  })

  // Animate progress bars when in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressFill = entry.target.querySelector(".progress-fill")
        const percentage = progressFill.getAttribute("data-percentage")
        progressFill.style.width = percentage + "%"
      }
    })
  })

  document.querySelectorAll(".skill-item").forEach((item) => {
    observer.observe(item)
  })
}

function createSkillItem(skill) {
  const skillItem = document.createElement("div")
  skillItem.className = "skill-item"
  skillItem.innerHTML = `
        <div class="skill-header">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-level">
                <span class="skill-category">${skill.category}</span>
                ${skill.level}
            </span>
        </div>
        <div class="progress-bar">
            <div class="progress-fill" data-percentage="${skill.percentage}"></div>
        </div>
    `
  return skillItem
}

// Contact Form
function initializeContactForm() {
  const contactForm = document.getElementById("contact-form")

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]')
    const originalText = submitButton.innerHTML

    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
    submitButton.disabled = true

    setTimeout(() => {
      // Show success message
      const successMessage = document.createElement("div")
      successMessage.className = "form-success"
      successMessage.innerHTML =
        '<i class="fas fa-check-circle"></i> Message sent successfully! I\'ll get back to you soon.'

      contactForm.appendChild(successMessage)
      contactForm.reset()

      submitButton.innerHTML = originalText
      submitButton.disabled = false

      // Remove success message after 5 seconds
      setTimeout(() => {
        successMessage.remove()
      }, 5000)
    }, 2000)
  })
}

// Animated Background
function createAnimatedBackground() {
  const animatedBg = document.getElementById("animated-bg")

  // Create stars
  for (let i = 0; i < 50; i++) {
    const star = document.createElement("div")
    star.className = "star"
    star.style.left = Math.random() * 100 + "%"
    star.style.width = Math.random() * 3 + 1 + "px"
    star.style.height = star.style.width
    star.style.setProperty("--duration", Math.random() * 10 + 5 + "s")
    star.style.setProperty("--delay", Math.random() * 5 + "s")
    star.style.setProperty("--opacity", Math.random() * 0.8 + 0.2)
    animatedBg.appendChild(star)
  }
}

// Scroll Animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  document
    .querySelectorAll(".project-card, .hobby-card, .education-item, .skills-card, .ml-card, .tools-card")
    .forEach((el) => {
      observer.observe(el)
    })
}

// General Animations
function initializeAnimations() {
  // Smooth scroll for all internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add scroll-based navbar background
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar")
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(15, 15, 15, 0.95)"
    } else {
      navbar.style.background = "rgba(15, 15, 15, 0.8)"
    }
  })
}

