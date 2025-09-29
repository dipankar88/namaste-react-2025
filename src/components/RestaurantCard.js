import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantCard = () => {
    
    const dataInfo = useRestaurantMenu();
    console.log(dataInfo);

    return (
        <div>
            <img></img>
            <h3></h3>
            <h4></h4>
            <h4></h4>
            <h4></h4>
        </div>
    );
}

export default RestaurantCard;