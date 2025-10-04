import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const onlineStatus = useOnlineStatus();

    if(!onlineStatus) {
        return <h1>Looks like you are offline. Please check your internet conection.</h1>
    }
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <label className="ml-3">Search : </label>
                    <input type="search" placeholder="Search Restaurant" className="border border-solid border-black"></input>
                    <button className="bg-amber-400 px-4 mx-2 rounded-2xl">Search</button>
                    <button className="bg-amber-600 px-4 mx-2 rounded-2xl">Top Rated Restaurant</button>
                </div>
            </div>
            <div>
                <RestaurantCard />
            </div>
        </div>
    );
}

export default Body;