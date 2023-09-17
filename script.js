document.addEventListener("DOMContentLoaded", function() {
    // Your existing article content insertion code
    const articleContent = `
      <h2 class="subheading" data-youtube="https://www.youtube.com/watch?v=example1">Introduction</h2>
      <p>Introductory text...</p>
      <h2 class="subheading" data-youtube="https://www.youtube.com/watch?v=example2">Body</h2>
      <p>Body text...</p>
    `;
  
    const articleElement = document.getElementById("article-content");
    if (articleElement) {
      articleElement.innerHTML = articleContent;
    }
  
    const languageSelect = document.getElementById("language-select");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
  
    function animatePlaceholderChange(newPlaceholder) {
        let i = searchInput.placeholder.length; // Step 1: Initialize 'i' to current placeholder length
      
        function frame() {
          if (i >= 0) {
            // Step 3: Backspace current placeholder
            searchInput.placeholder = searchInput.placeholder.substring(0, i);
            i--;
          } else if (-i <= newPlaceholder.length) {
            // Step 3: Type forward new placeholder
            searchInput.placeholder = newPlaceholder.substring(0, -i);
            i--;
          } else {
            // Step 3: Set new placeholder and clear interval
            searchInput.placeholder = newPlaceholder;
            clearInterval(interval);
          }
        }
      
        let interval = setInterval(frame, 50);  // Step 2: Start interval
      }
      
  
    function performGoogleSearch(query) {
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  
    searchButton.addEventListener("click", function() {
      const searchQuery = searchInput.value;
      performGoogleSearch(searchQuery);
    });
  
    languageSelect.addEventListener("change", function() {
      const selectedLanguage = languageSelect.value;
      const placeholderText = languageSelect.querySelector(`option[value=${selectedLanguage}]`).getAttribute(`data-placeholder-${selectedLanguage}`);
      const buttonText = languageSelect.querySelector(`option[value=${selectedLanguage}]`).getAttribute(`data-button-text-${selectedLanguage}`);
  
      if (placeholderText) {
        animatePlaceholderChange(placeholderText);
      }
  
      if (buttonText) {
        searchButton.innerText = buttonText;
      }
    });
});
