import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#090B1A] p-7 lg:p-0">
      <div className="space-between flex flex-col-reverse overflow-hidden rounded-lg bg-[#1B1938] lg:h-[450px] lg:w-[1110px] lg:flex-row">
        <div className="flex">
          <div className="p-10 lg:p-20">
            <div className="mb-4 text-center font-sans text-[24px] font-[600] leading-snug text-white lg:mb-10 lg:text-left lg:text-[35px]">
              Get{' '}
              <span className="text-[#AA5CDB] text-opacity-95">insights</span>{' '}
              that help your business grow.
            </div>
            <div className="text-md mb-10 text-center text-sm font-[300] leading-6 tracking-wide text-white text-opacity-60 lg:mb-14 lg:mr-5 lg:text-left lg:text-base lg:leading-7">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </div>
            <div className="flex flex-col items-center space-y-8 lg:flex-row lg:space-y-0 lg:space-x-14">
              <div className="flex flex-col items-center justify-center lg:items-start">
                <div className="mb-1 text-2xl text-white lg:text-left">
                  10k+
                </div>
                <div className="font-Lexend text-xs font-light tracking-widest text-white text-opacity-60 lg:text-sm">
                  COMPANIES
                </div>
              </div>
              <div className="flex flex-col items-center justify-center lg:items-start">
                <div className="mb-1 text-2xl text-white">314</div>
                <div className="font-Lexend text-xs font-light tracking-widest text-white text-opacity-60 lg:text-sm">
                  TEMPLATES
                </div>
              </div>
              <div className="flex flex-col items-center justify-center lg:items-start">
                <div className="mb-1 text-2xl text-white">12M+</div>
                <div className="font-Lexend text-xs font-light tracking-widest text-white text-opacity-60 lg:text-sm">
                  QUERIES
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blend-dark h-[245px] w-full flex-none bg-[#AA5CDB] bg-opacity-[95%] bg-[url('/img/image-header-mobile.jpg')] bg-cover bg-blend-multiply lg:h-full lg:w-[542px] lg:bg-[url('/img/image-header-desktop.jpg')]">
          <div className="h-full w-full bg-[#AA5CDB] bg-opacity-[25%]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
