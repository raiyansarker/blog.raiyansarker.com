const SubscribeForm = () => {
  return (
    <>
      <form className="bg-gray-200 h-12 mx-auto rounded-md w-full md:w-7/12 lg:w-6/12 xl:w-5/12 flex flex-row items-center space-x-1 p-1.5">
        <input
          type="email"
          className="w-8/12 lg:w-9/12 h-full px-1 pl-3 bg-transparent outline-none placeholder:text-xs md:placeholder:text-sm placeholder:font-medium"
          placeholder="abc@xyz.com"
          name="email"
        />
        <button className="font-semibold text-white rounded text-sm bg-[#292929] w-4/12 lg:w-3/12 h-full focus:outline-none hover:bg-indigo-500 hover:text-white focus:bg-indigo-500 focus:text-white transition-colors">
          Subscribe
        </button>
      </form>
    </>
  );
};

export default SubscribeForm;
