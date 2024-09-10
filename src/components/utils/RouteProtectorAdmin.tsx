import React, { ReactNode } from "react";
import { useOnAuthStateAdminQuery } from "../rtk/Endpoint";
import ProtectorLoading from "../ui/ProtectorLoading";

const RouteProtectorAdmin: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { data, isFetching, isSuccess } = useOnAuthStateAdminQuery(undefined);


    const location = window.location.pathname;

    if (isSuccess && data?.data?.ping !== true) {
        if (!location.includes('/auth')) {
            window.location.href = '/';
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

export default RouteProtectorAdmin;
