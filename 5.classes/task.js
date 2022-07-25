class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    this.state *= 1.5;
  }
  set state(state) {
    if (state < 0) {
      state = 0;
    }
    if (state > 100) {
      state = 100;
    }
    this._state = state;
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state, type);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state, type);
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = 'detective';
  }
}

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    const book = this.books.find(item => item[type] === value);
    if (book) {
      return book;
    } else {
      return null;
    }
  }
  giveBookByName(bookName) {
    const bookIndex = this.books.findIndex(item => item.name === bookName);
    if (bookIndex !== -1) {
      return this.books.splice(bookIndex, 1)[0];
    } else {
      return null;
    }
  }
}

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  addMark(mark, subjectName) {
    if (this.marks === undefined) {
      this.marks = [{
        subject: subjectName,
        marks: [mark]
      }];
    } else if (mark > 5 || mark < 1 || typeof mark !== "number") {
      return "Ошибка! Оценка должна быть целым числом от 1 до 5";
    } else {
      let index = this.marks.findIndex(item => item.subject === subjectName);

      if (index !== -1) {
        this.marks[index].marks.push(mark);
      } else {
        this.marks.push({
          subject: subjectName,
          marks: [mark]
        });
      };
    }
  };

  getAverageBySubject(subjectName) {
    let index = this.marks.findIndex(item => item.subject === subjectName);

    if (index === -1) {
      return "Несуществующий предмет";
    } else {
      return this.marks[index].marks.reduce((acc, item) => acc + item, 0) / this.marks[index].marks.length;
    }
  };

  getAverage() {
    let allMarks = [];
    this.marks.forEach(item => allMarks.push(...item.marks));
    return allMarks.reduce((acc, item) => acc + item, 0) / allMarks.length;
  };
}