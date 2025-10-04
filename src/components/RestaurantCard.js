import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantCard = () => {
    
    const dataInfo = useRestaurantMenu();
    console.log(dataInfo);

    return (
        <div className="border border-solid h-50 w-[250px] m-4">
            <img></img>
            <h3>Name : </h3>
            <h4>Cuisines : </h4>
            <h4>Avg. Rating : </h4>
            <h4>Cost for two : </h4>
            <h4>Delivery Time : </h4>
        </div>
    );
}

export default RestaurantCard;