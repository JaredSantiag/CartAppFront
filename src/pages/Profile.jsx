import { useEffect } from "react";
import { useUser } from "../hooks/useUser"

export const Profile = () => {

    const { user, isLoading, getUser } = useUser();

    useEffect(() => {
        getUser();
    }, []);

    if (isLoading) {
        return (
            <div className="container my-4 text-center">
                <div className="spinner-border text-primary m-4" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    console.log(user)

    return (
        <div></div>
    )
}