import { useAppointAdminMutation, useUserListAdminQuery } from "../../components/rtk/Endpoint";
import LoadingModal from "../../components/ui/LoadingModal";

interface TUser {
    _id: string,
    name: string,
    email: string,
    password: string,
    phone: string,
    role: "admin" | "user",
    address: string,
}

const UserManagement = () => {
    const { data, isFetching } = useUserListAdminQuery(undefined);
    const [triggerAppointAdmin] = useAppointAdminMutation(undefined);
    return (
        <div className="max-w-[1200px] mx-auto  m-5 p-5">
            <LoadingModal isLoading={isFetching} />
            <div className="overflow-x-auto bg-white rounded-xl ">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.data?.map((item: TUser, index: number) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{item?.name}</td>
                                <td>{item?.address}</td>
                                <td>{item?.email}</td>
                                <td>{item?.phone}</td>
                                <td className="capitalize">{item?.role}</td>
                                <th>
                                    <button onClick={()=> triggerAppointAdmin(item?._id)} disabled={item?.role === 'admin' ? true : false} className="btn btn-ghost btn-xs">Appoint admin</button>
                                </th>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;