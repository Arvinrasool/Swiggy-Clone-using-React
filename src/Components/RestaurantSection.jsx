const RestaurantSection = (title) => {
    return (

            <ul className="flex flex-col w-6/12" key={index}>
              <div className="flex justify-between p-4 text-xl cursor-pointer" onClick={handleClick}>
                <h2 className="font-bold text-2xl">{title} ({items.length})</h2>
                <span>⏬</span>
              </div>
            </ul>
        );
}

export default RestaurantSection;