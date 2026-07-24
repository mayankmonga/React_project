
const FeaturedCard = ({ item, activeCard, setActiveCard }) => {
  return (
    <div
      onMouseEnter={() => setActiveCard(item.id)}
      onClick={() => setActiveCard(item.id)}
      className={`rounded-3xl overflow-hidden transition-all duration-300
      ${
        activeCard === item.id
          ? "xl:col-span-2 shadow-lg"
          : "xl:col-span-1"
      }`}
    >
      <img
        src={item.image}
        alt={item.title}
        className={`w-full object-cover transition-all duration-300
        ${
          activeCard === item.id
            ? "h-[240px] md:h-[280px] xl:h-[334px]"
            : "h-[240px] md:h-[300px] xl:h-[384px] rounded-3xl shadow-md"
        }`}
      />

      <div className="p-4">
        <h3
          className={`font-medium transition-all duration-300 ${
            activeCard === item.id
              ? "text-2xl md:text-[34px]"
              : "text-lg"
          }`}
        >
          {item.title}
        </h3>

        {activeCard === item.id && (
          <p className="description mt-2">
            {item.description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mt-4">
          <div>
            <del className="text-gray-400 text-sm">
              ₹{item.oldPrice}
            </del>

            <h2 className="new-price">
              ₹{item.newPrice}
            </h2>
          </div>

          <button className="bg-[#B9467B] text-white rounded-full px-5 py-2 text-sm md:text-base">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;