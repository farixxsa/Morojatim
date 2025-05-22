function showSection(id, btn) {
  // Remove active class from all buttons
  const buttons = document.querySelectorAll('nav button');
  buttons.forEach(button => button.classList.remove('active'));
  // Add active class to clicked button
  btn.classList.add('active');

  // Hide all sections
  const sections = document.querySelectorAll('.section-content');
  sections.forEach(section => section.classList.remove('active'));
  // Show selected section with animation
  const activeSection = document.getElementById(id);
  activeSection.classList.add('active');
  activeSection.scrollTop = 0; // Reset scroll container scroll to top

  // Scroll otomatis ke paragraf teks (jika ada)
  const textElement = document.querySelector(`#${id} p[id$="-text"]`);
  if(textElement) {
    // scroll ke paragraf teks di dalam container
    activeSection.scrollTo({
      top: textElement.offsetTop - activeSection.offsetTop,
      behavior: 'instant'
    });
  }
}