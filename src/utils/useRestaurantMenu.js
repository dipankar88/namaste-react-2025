import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchRestaurantData();
    }, []);

    const fetchRestaurantData = async () => {
        const data = await fetch(MENU_API);
        const json = await data.json();

        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;