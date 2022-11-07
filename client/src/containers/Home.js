import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

//this page links to the cocktail api with this url: www.thecocktaildb.com/api/json/v1/1/search.php?f=a
//we need to replace the category menu with a search form
//we want to filter by letter - either with a drop down or with a on/off button (only 1 letter selected at a time)
//similar to the book search, we can browse when not logged in, but the add button only appears when logged in

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
    </div>
  );
};

export default Home;
