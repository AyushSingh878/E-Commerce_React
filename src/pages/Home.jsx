import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortProductsByPrice, resetSort } from "../redux/Slices/ProductSlice";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { toast } from "react-hot-toast";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  // const API_URL = "https://ayushsingh878.github.io/dummy-ecommerce-api/db.json"
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [sortedByPrice, setSortedByPrice] = useState(false);
  

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    }
    catch(error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[])

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);
  console.log(products);

  const handleSort = () => {
    dispatch(sortProductsByPrice(products));
    setSortedByPrice(true);
    toast.success("Products Sorted");
  };

  const handleResetSort = () => {
    dispatch(resetSort(products));
    setSortedByPrice(false);
    toast.success("Products Unsorted");
  };

  return (
    <div>
      {
        loading ? <Spinner />  :
        posts.length > 0 ? 
        (<div>
          <div className="m-5px bg-gray-700 text-white w-25 flex justify-center">
          <button className="mr-10px p-5px" onClick={handleSort}>
            Sort by Price
          </button>
          {sortedByPrice && (
            <button className="mr-10px p-5px" onClick={handleResetSort}>
              &times;
            </button>
          )}
        </div>
        <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map( (post) => (
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>
        </div>) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      }
    </div>
  );
};

export default Home;
