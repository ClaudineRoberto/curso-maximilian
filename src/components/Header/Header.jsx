import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Powerful", "Simple"];
function genRandomIndex() {
  return Math.floor(Math.random() * reactDescriptions.length);
}

export function Header() {

    const description = reactDescriptions[genRandomIndex()];
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }