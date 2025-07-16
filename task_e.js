const book = {
    title: "The Lost Guy",
    author: "Viv Richards",
    desc: "This book is about a guy who left hsi home in early stages."
};
const summary = (book) => {
    return `The book name is ${book.title} and the author of this book is ${book.author}. ${book.desc}`;
}
console.log(summary(book));
