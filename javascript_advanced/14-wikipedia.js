function createElement(data) {
    const paragraph = document.createElement("p"); // Create a paragraph element
    paragraph.textContent = data; // Set the content of the paragraph to the data
    document.body.appendChild(paragraph); // Append the paragraph to the document body
  }
  
  function queryWikipedia(callback) {
    const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
    const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
  
    xhr.open("GET", url, true); // Initialize a GET request
    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText); // Parse the JSON response
        const page = Object.values(response.query.pages)[0]; // Access the page object
        callback(page.extract); // Call the callback with the extract
      }
    };
    xhr.onerror = function () {
      console.error("An error occurred while fetching the data.");
    };
    xhr.send(); // Send the request
  }
  
  // Call queryWikipedia with createElement as the callback
  queryWikipedia(createElement);
  