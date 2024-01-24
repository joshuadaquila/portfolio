document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('nav a');

  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      var targetId = this.getAttribute('href').substring(1);
      var targetSection = document.getElementById(targetId);

      document.querySelectorAll('section').forEach(function (section) {
        section.classList.remove('active');
      });

      targetSection.classList.add('active');
      window.scrollTo({
        top: targetSection.offsetTop - 112, 
        behavior: 'smooth'
      });
    });
  });
});