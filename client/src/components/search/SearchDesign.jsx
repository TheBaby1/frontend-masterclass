const SearchDesign = () => {
    return (
        <>
            <div className="flex bg-[#dadbf1] h-[300px] px-3 px-3 justify-center items-center">
                <div className="flex flex-col gap-4 items-center">
                    <h1 className="text-black text-[60px]">
                        How can we help?
                    </h1>
                    <input
                        type="search"
                        placeholder="Search"
                        className="bg-white px-3 py-2 w-[550px] shadow-md border-black border-[1px]"
                        >   
                    </input>
                </div>
            </div>
        </>
    );
}

export default SearchDesign;