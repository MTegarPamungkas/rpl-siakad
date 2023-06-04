const NoMatch = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container min-h-[70vh]  px-6 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="w-full lg:w-1/2">
            <p className="text-sm font-medium text-blue-500">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
              Page not found
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Sorry, the page you are looking for doesn't exist.Here are some
              helpful links:
            </p>
          </div>

          <div className="relative w-full  lg:w-1/2 lg:mt-0">
            <img
              className="w-full max-w-lg lg:mx-auto"
              src="https://merakiui.com/images/components/illustration.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default NoMatch;
