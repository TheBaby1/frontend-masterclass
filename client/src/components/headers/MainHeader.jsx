const MainHeader = () => {
    return (
        <>
            <div className="flex flex-row bg-black px-6 py-5">
                <div className="flex flex-row gap-3">
                    <h1 className="text-white font-semibold">
                        Abstract
                    </h1>
                    <h1 className="text-white">|</h1>
                    <h1 className="text-white">
                        Help Center
                    </h1>
                </div>

                <div className="ml-auto flex flex-row justify-end gap-3">
                    <button className="px-3 text-white border-[1px] rounded-[4px] hover:cursor-pointer">
                        Submit a request
                    </button>

                    <button className="px-3 text-white bg-[#4C5FD5] rounded-[4px] hover:cursor-pointer">
                        Sign In
                    </button>
                </div>
            </div>
        </>
    );
}

export default MainHeader;