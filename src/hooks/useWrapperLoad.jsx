import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";


function useLoading(time = 2000) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, time);
        return () => clearTimeout(timer);
    }, [time])
    return isLoading;
}

export default function LoadingWrapper({ children, time = 2000 }) {
    const isLoading = useLoading(time);

    return isLoading ? (
        <div className="flex justify-center items-center h-screen bg-[#222222]">
            <HashLoader color="#359be8" size={80} />
        </div>
    ) : (
        children
    );
}