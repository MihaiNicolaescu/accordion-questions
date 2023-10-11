import Accordion from "./Accordion";
import "./style/app.css";

const countries = [
  {
    "country": "United States",
    "capital": "Washington, D.C.",
    "population": "331 million",
    "currency": "United States Dollar (USD)",
    "language": "English",
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png"
  },
  {
    "country": "France",
    "capital": "Paris",
    "population": "67 million",
    "currency": "Euro (EUR)",
    "language": "French",
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1920px-Flag_of_France.svg.png"
  },
  {
    "country": "Japan",
    "capital": "Tokyo",
    "population": "126 million",
    "currency": "Japanese Yen (JPY)",
    "language": "Japanese",
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1920px-Flag_of_Japan.svg.png"
  },
  {
    "country": "Brazil",
    "capital": "Brasília",
    "population": "213 million",
    "currency": "Brazilian Real (BRL)",
    "language": "Portuguese",
    "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1920px-Flag_of_Brazil.svg.png"
  },
  {
    "country": "China",
    "capital": "Beijing",
    "population": "1.4 billion",
    "currency": "Renminbi (CNY)",
    "language": "Mandarin",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1920px-Flag_of_the_People%27s_Republic_of_China.svg.png"
  }
];


function App() {
  return (
    <div className="App">
      {countries.map((c) => (
        <Accordion country={c}/>
      ))}
    </div>
  );
}

export default App;
