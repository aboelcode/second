document.addEventListener('DOMContentLoaded', function() {
  // تهيئة عنوان السيرفر الخلفي بناءً على البيئة
  const API_URL = getApiUrl();
  
  // Mobile navigation
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
  
  // Active navigation link based on scroll position
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href').slice(1) === current) {
        item.classList.add('active');
      }
    });
  });
  
  // Projects loading
  loadProjects();
  
  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };
      
      // Disable form
      Array.from(contactForm.elements).forEach(input => input.disabled = true);
      formStatus.textContent = 'Sending...';
      formStatus.style.display = 'block';
      formStatus.className = '';
      
      // Send form data to API
      fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Show success message
        formStatus.textContent = 'Message sent successfully!';
        formStatus.className = 'success';
        
        // Reset form
        contactForm.reset();
        
        // Re-enable form after a delay
        setTimeout(() => {
          Array.from(contactForm.elements).forEach(input => input.disabled = false);
        }, 3000);
      })
      .catch(error => {
        console.error('Error:', error);
        
        // Show error message
        formStatus.textContent = 'Failed to send message. Please try again later.';
        formStatus.className = 'error';
        
        // Re-enable form
        Array.from(contactForm.elements).forEach(input => input.disabled = false);
      });
    });
  }
});

// دالة لتحديد عنوان السيرفر الخلفي بناءً على البيئة
function getApiUrl() {
  const hostname = window.location.hostname;
  
  // استخدام الخادم المحلي على بيئة التطوير
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'http://localhost:3000/api';
  }
  
  // استخدام خادم Render على بيئة الإنتاج
  return 'https://aboelcode-server.onrender.com/api';
}

// Function to load projects
function loadProjects() {
  const projectsContainer = document.getElementById('projects-container');
  const loadingSpinner = document.getElementById('projects-loading');
  
  if (!projectsContainer) return;
  
  // تحديد عنوان السيرفر بناءً على البيئة
  const API_URL = getApiUrl();
  
  // First try to get projects from the server
  fetch(`${API_URL}/projects`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(projects => {
      // Hide loading spinner
      if (loadingSpinner) loadingSpinner.style.display = 'none';
      
      if (projects.length === 0) {
        // If no projects in database, display sample projects
        displaySampleProjects(projectsContainer);
      } else {
        // Render projects from server
        projects.forEach(project => {
          const projectCard = createProjectCard(
            project.title,
            project.description,
            project.imageUrl,
            project.projectUrl,
            project.technologies
          );
          projectsContainer.appendChild(projectCard);
        });
      }
    })
    .catch(error => {
      console.error('Error fetching projects:', error);
      
      // Hide loading spinner
      if (loadingSpinner) loadingSpinner.style.display = 'none';
      
      // Display sample projects if API call fails
      displaySampleProjects(projectsContainer);
    });
}

// Function to display sample projects
function displaySampleProjects(container) {
  // Sample projects data
  const sampleProjects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with product catalog, shopping cart, user authentication, and payment integration.',
      image: 'https://via.placeholder.com/800x600?text=E-commerce+Platform',
      url: '#',
      technologies: ['React', 'Node.js', 'Express', 'Stripe']
    },
    {
      title: 'Task Management App',
      description: 'A productivity app allowing users to create, organize, and track their tasks with reminder notifications.',
      image: 'https://via.placeholder.com/800x600?text=Task+Management+App',
      url: '#',
      technologies: ['Vue.js', 'Express', 'Socket.io']
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my projects and skills, with contact form and project filtering.',
      image: 'https://via.placeholder.com/800x600?text=Portfolio+Website',
      url: '#',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js']
    }
  ];
  
  // Render sample projects
  sampleProjects.forEach(project => {
    const projectCard = createProjectCard(
      project.title,
      project.description,
      project.image,
      project.url,
      project.technologies
    );
    container.appendChild(projectCard);
  });
}

// Function to create a project card
function createProjectCard(title, description, image, url, technologies) {
  const card = document.createElement('div');
  card.className = 'project-card';
  
  const techTags = technologies.map(tech => 
    `<span class="project-tag">${tech}</span>`
  ).join('');
  
  card.innerHTML = `
    <div class="project-img">
      <img src="${image}" alt="${title}">
    </div>
    <div class="project-content">
      <h3>${title}</h3>
      <p>${description}</p>
      <div class="project-tags">
        ${techTags}
      </div>
      <div class="project-links">
        <a href="${url}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> View Project</a>
      </div>
    </div>
  `;
  
  return card;
}