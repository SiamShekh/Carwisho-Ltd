import React, { ReactNode } from "react";
import { useOnAuthStateQuery } from "../rtk/Endpoint";
import ProtectorLoading from "../ui/ProtectorLoading";

const RouteProtector: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { data, isFetching, isSuccess } = useOnAuthStateQuery(undefined);


    const location = window.location.pathname;

    if (isSuccess && data?.data?.ping !== true) {
        if (!location.includes('/auth')) {
            window.location.href = '/auth/login';
        }
    }

    if (isFetching) {
        return <ProtectorLoading isLoading={true} />;
    }

    if (isSuccess && data?.data?.ping === true) {
        if (location.includes('/auth')) {
            window.location.href = '/';
        }
    }
    return children;

};

export default RouteProtector;
