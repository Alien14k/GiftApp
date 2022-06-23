import "../index.css";

export const GifItem = ({ title, url }) => {
  // console.lo, title, url);
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg md:w-1/2 sm:w-1/3 mt-4 hover:bg-slate-600 hover:text-slate-50 transition-all delay-50">
        <img className="w-full" src={url} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
        </div>
      </div>
    </>
  );
};
