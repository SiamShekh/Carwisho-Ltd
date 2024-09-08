interface Props {
    isLoading: boolean,
}

const ProtectorLoading = ({ isLoading }: Props) => {
    if (isLoading) {
        return <div className="min-h-screen w-full">
            <div className="fixed text-white top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        </div>
    }
};

export default ProtectorLoading;