// DOM Elements
const header = document.querySelector('.header');
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const projectsGrid = document.getElementById('projects-grid');
const currentYearSpan = document.getElementById('current-year');

// Projects Data
const projects = [
  {
    id: 1,
    name: "Personal Portfolio",
    description: "A responsive personal portfolio website built with modern web technologies.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/vineet817"
  },
  {
    id: 2,
    name: "E-commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product catalog, and payment processing.",
    tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
    url: "https://github.com/vineet817"
  },
  {
    id: 3,
    name: "Task Management App",
    description: "A productivity application for managing tasks, projects, and deadlines with collaborative features.",
    tech: ["JavaScript", "React", "Firebase"],
    url: "https://github.com/vineet817"
  },
  {
    id: 4,
    name: "Weather Dashboard",
    description: "A weather application that provides current conditions and forecasts using data from a weather API.",
    tech: ["JavaScript", "APIs", "CSS"],
    url: "https://github.com/vineet817"
  }
];

// Initialize the page
function init() {
  // Set current year in footer
  currentYearSpan.textContent = new Date().getFullYear();
  
  // Render projects
  renderProjects();
  
  // Initialize scroll animations
  handleScrollAnimations();
  
  // Add event listeners
  setupEventListeners();
}

// Render projects to the DOM
function renderProjects() {
  projectsGrid.innerHTML = projects.map((project, index) => `
    <div class="project-card" style="animation-delay: ${0.2 + index * 0.1}s">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      
      <div class="project-tech">
        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
      
      <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-link">
        View on GitHub
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  `).join('');
}

// Handle scroll animations
function handleScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    observer.observe(section);
  });
}

// Setup event listeners
function setupEventListeners() {
  // Header scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
    });
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !menuToggle.contains(e.target)) {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
    }
  });
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
