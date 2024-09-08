interface Props {
    isLoading: boolean,
}

const LoadingModal = ({ isLoading }: Props) => {
    if (isLoading) {
        return <div className="fixed text-white top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
};

export default LoadingModal;