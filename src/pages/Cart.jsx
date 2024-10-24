import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div>

        <div>
          <div className="text-black-700 font-semibold text-lg text-left truncate w-40 mt-1">Your Cart</div>
          <div className="text-blue-700 font-semibold text-lg text-left truncate w-40 mt-1">Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex justify-between gap-12 items-center w-full mt-5 text-green-700">
          <p>Total Amount: ${totalAmount}</p>
          <button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          >
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex justify-around items-end w-full mt-5">
      <h1 className="text-lg text-red-800">Cart Empty</h1>
      <Link to={"/"}>
        <button
        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
        text-[12px] p-1 px-3 uppercase 
        hover:bg-gray-700
        hover:text-white transition duration-300 ease-in"
        >
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
