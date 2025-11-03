import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CardSlider from "./components/CardSlider";
import { cardDataSets } from "./components/CardData";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />

      <CardSlider heading="Popular homes in Lahore" cards={cardDataSets.lahore} />
      <CardSlider heading="Popular homes in Islamabad" cards={cardDataSets.islamabad} />
       <CardSlider heading="Available next month in Dubai" cards={cardDataSets.dubai} />
         <CardSlider heading="Place to stay in Muree" cards={cardDataSets.muree} />
         <Footer/>
    
    </div>
  );
}

export default App;
