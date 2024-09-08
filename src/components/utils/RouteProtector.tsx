import React, { ReactNode, useEffect } from "react";
import { useLazyOnAuthStateQuery } from "../rtk/Endpoint";
import ProtectorLoading from "../ui/ProtectorLoading";

const RouteProtector: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [triggerData, { data, isFetching, isSuccess }] = useLazyOnAuthStateQuery(undefined);
    
    useEffect(() => {
        triggerData(undefined);
    }, [])

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
