
// import {FcDeleteDatabase} from "react-icons/fc"
import { MdRemoveShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div>

        <div className="h-[250px]">
          <img src={item.image} className="h-full w-full "/>
        </div>
        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
          <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          <div>
            <p className="text-green-600 font-semibold">{item.price}</p>
            <div
            onClick={removeFromCart}>
              {/* <FcDeleteDatabase/> */}
              <MdRemoveShoppingCart />
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
