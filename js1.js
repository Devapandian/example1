async function getBooks() {
    let response = await fetch("https://anapioficeandfire.com/api/characters/583");
    let books = await response.json();
    // let bookList = document.getElementById("book-list");
    // bookList.innerHTML = "";
    // books.forEach(book => {
    //   let bookDiv = document.createElement("div");
    //   let title = document.createElement("h2");
    //   title.innerHTML = book.name;
    //   let authors = document.createElement("p");
    //   authors.innerHTML = "Author(s): " + book.authors.join(", ");
    //   let isbn = document.createElement("p");
    //   isbn.innerHTML = "ISBN: " + book.isbn;
    //   let pages = document.createElement("p");
    //   pages.innerHTML = "Number of pages: " + book.numberOfPages;
    //   let publisher = document.createElement("p");
    //   publisher.innerHTML = "Publisher: " + book.publisher;
    //   let releaseDate = document.createElement("p");
    //   releaseDate.innerHTML = "Release date: " + book.released;
    //   let country = document.createElement("p");
    //   country.innerHTML = "Country: " + book.country;
    //   bookDiv.append(title, authors, isbn, pages, publisher, releaseDate, country);
    //   bookList.appendChild(bookDiv);
    // });
    console.log(books);
  }
  getBooks();
  