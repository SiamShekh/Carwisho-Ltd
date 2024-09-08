import React, { ReactNode, useEffect } from "react";
import { useOnAuthStateQuery } from "../rtk/Endpoint";
import { useDispatch } from "react-redux";
import { logoutUser } from "../rtk/UserSlice";
import ProtectorLoading from "../ui/ProtectorLoading";

const RouteProtector: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { data, isFetching, isSuccess } = useOnAuthStateQuery(undefined);
    const dispatch = useDispatch();
    const location = window.location.pathname;

    useEffect(() => {
        if (isSuccess && data?.data?.ping !== true) {
            dispatch(logoutUser());
            if (!location.includes('/auth')) {
                window.location.href = '/auth/login';
            }
        }
    }, [data, isSuccess, dispatch]);

    if (isFetching) {
        return <ProtectorLoading isLoading={true} />;
    }

    return children;
};

export default RouteProtector;
