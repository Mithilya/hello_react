//import logo from './logo.svg';
import './App.css';

const magazines = [
  { id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true },
  { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true },
  { id: 3, title: 'Communication Arts', theme: 'design', isAvailable: false }
];

function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'red' : 'green'
      }}
    >
      {zine.title}
    ></li>
    );
    return(
      <ul>{listZines}</ul>
    )
}

const book = {
  title: 'A Farewell to Arms',
  author: 'Earnest Hemingway',
  published: '1929',
  image:'https://m.media-amazon.com/images/M/MV5BMzM2ODc0NTY3OF5BMl5BanBnXkFtZTgwMjQwNzkzMjE@._V1_.jpg',
  width:'264',
  height: '378'
}; 

function MagicButton() {
  return(
  <>
    <h3>This is a Magic Button</h3>
    <button>Magic</button>
  </>
  );
}

function Bookshelf({ book }) {
  return (
    <>
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      <img  
        className="bookCover"
        src={book.image}
        alt={book.title + ' cover'}
        style={{
          width: book.width,
          height: book.height
        }}
      />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ZineRack />
        <Bookshelf book={book} />
        <MagicButton />
      </header>
    </div>
  );
}


export default App;
