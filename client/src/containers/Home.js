import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

//this page links to the cocktail api with this url: www.thecocktaildb.com/api/json/v1/1/search.php?f=a
import { searchCocktailsByLetter } from "../utils/api";

//we need to replace the category menu with options for search
//Option 1 - we want to filter by letter - with a on/off buttons (only 1 letter selected at a time)
//Option 2 - we can search by category - maybe a list of popular ingredients as categories to pick from
//Option 3 - we can search by cocktail name submitted in an input field
//create tabs so we can flip from one search type to the other

//on cocktail cards, similar to the book search, we can browse when not logged in, but the add button only appears when logged in

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
    </div>
  );
};

export default Home;
