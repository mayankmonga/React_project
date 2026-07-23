import { FeatureData } from "./FeatureData";


const FeaturedCard = ({ item, large, index,activeCard,
  setActiveCard, }) => {
console.log(activeCard, item.id);
  return (
    <div
      onMouseEnter={() => setActiveCard(item.id)}
    //    onMouseLeave={() => setActiveCard(0)}
      className={` rounded-3xl overflow-hidden   ${activeCard === item.id ? "col-span-2 shadow-sm " : "col-span-1"}`}
    >
      <img
        src={item.image}
        alt={item.title}
        className={`w-full object-cover  ${
          activeCard === item.id? "h-[334px]" : "h-[384px] rounded-3xl shadow-sm"
        }`}
      />

      <div className="p-3">
         

            <h3
            style={{
                fontSize: activeCard === item.id ? "34px" : "18px"
            }}
            >
            {item.title}
            </h3>

        {activeCard === item.id && (
          <p className="description transition-all duration-300">
            {item.description}
          </p>
        )}

        <div className="flex justify-between items-center mt-3">
          <div>
            <del className="text-gray-400">₹{item.oldPrice}</del>

            <h2 className=" new-price">₹{item.newPrice}</h2>    
          </div>

          <button className="bg-[#B9467B] text-white !rounded-3xl px-4 py-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
