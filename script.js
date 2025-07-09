const topics = document.querySelectorAll('[data-topic]');
const contents = document.querySelectorAll('.topic-content');
const subtopics = document.querySelectorAll('.subtopic');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const menuToggle = document.getElementById('menu-toggle');
const menuToggleMobile = document.getElementById('menu-toggle-mobile');

topics.forEach(topic => {
  topic.addEventListener('click', function (e) {
    e.stopPropagation();

    topics.forEach(t => t.classList.remove('active'));
    topic.classList.add('active');

    contents.forEach(c => c.style.display = 'none');

    const targetId = topic.getAttribute('data-topic');
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.style.display = 'block';
    }

    const subtopic = topic.querySelector('.subtopic');
    if (subtopic) {
      subtopic.classList.toggle('active');
    }
  });
});

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
  content.classList.toggle('shift');
});

menuToggleMobile.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
  content.classList.toggle('shift');
});
