import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const onlineStatus = useOnlineStatus();

    if(!onlineStatus) {
        return <h1>Looks like you are offline. Please check your internet conection.</h1>
    }
    return (
        <div>
            <RestaurantCard />
        </div>
    );
}

export default Body;