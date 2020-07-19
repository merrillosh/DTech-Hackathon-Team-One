function addEntry() {
  const entryHolder = document.getElementById("entry-holder");
  const title = document.getElementById("title").value;
  const pages = document.getElementById("number-pages").value;
  const end = document.getElementById("end-page").value;
  const minutes = document.getElementById("minutes").value;

  const pagesTotal = document.getElementById("pages-read");
  const pageNum = pagesTotal.innerText;
  let num = parseInt(pageNum);
  let newTotal = num + parseInt(pages);
  pagesTotal.innerText = newTotal;
  
  let entry = new Entry(title, pages, minutes);
  entry.render();
}

class Entry {
  constructor(title, pages, minutes) {
    this.title = title;
    this.pages = pages;
    this.minutes = minutes;
  }

  render() {
    const entryHolder = document.getElementById("entry-holder");
    const newEntry = document.createElement("div");
    newEntry.id = "entries";
    const titleHeader = document.createElement("h2");
    titleHeader.innerText = this.title;

    const pagesRead = document.createElement("p");
    pagesRead.innerText = "Pages read: " + this.pages;
    const minutesElement = document.createElement("p");
    minutesElement.innerText = "Time read: " + this.minutes + " minutes";

    newEntry.appendChild(titleHeader);
    newEntry.appendChild(pagesRead);
    newEntry.appendChild(minutesElement);
    
    entryHolder.appendChild(newEntry);
  }
}

let entriesList = [];