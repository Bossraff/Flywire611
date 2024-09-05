function openModal(modalId, imageSrc, captionText) {
    const modal = document.getElementById(modalId);
    const modalImage = modal.querySelector('.modal-content');
    const caption = modal.querySelector('#caption-' + modalId.split('-').pop());

    modal.style.display = 'flex';
    modalImage.src = imageSrc;
    caption.textContent = captionText;
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

function changeImage(imageSrc, modalImageId) {
    const modalImage = document.getElementById(modalImageId);
    modalImage.src = imageSrc;
}





document.addEventListener('DOMContentLoaded', () => {
  fetch('news.json')
    .then(response => response.json())
    .then(data => {
      const newsContainer = document.getElementById('news-articles');
      let htmlContent = '';

      data.newsArticles.forEach(article => {
        htmlContent += `
          <article class="news-article">
            <img src="${article.image}" alt="${article.title}">
            <div class="news-content">
              <h2>${article.title}</h2>
              <p class="news-date">${article.date}</p>
              <p>${article.content}</p>
              <a href="contact.html">Know More</a>
            </div>
          </article>
        `;
      });

      newsContainer.innerHTML = htmlContent;
    })
    .catch(error => console.error('Error loading news:', error));
});


document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const topPerformersContainer = document.getElementById('top-performers');

        data.topPerformers.forEach(performer => {
          const article = document.createElement('article');
          article.className = 'performer';
          article.innerHTML = `
            <h3>${performer.name}</h3>
            <p>${performer.neurons}</p>
          `;
          topPerformersContainer.appendChild(article);
        });
      })
      .catch(error => console.error('Error loading JSON data:', error));
  });





  document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display micro news items
    fetch('micro-news.json')
      .then(response => response.json())
      .then(data => {
        const microNewsContainer = document.getElementById('micro-news');

        data.microNewsItems.forEach(item => {
          const article = document.createElement('article');
          article.className = 'micro-news-item';
          article.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.time}</p>
            <p>${item.details}</p>
          `;
          microNewsContainer.appendChild(article);
        });
      })
      .catch(error => console.error('Error loading micro news data:', error));
  });





