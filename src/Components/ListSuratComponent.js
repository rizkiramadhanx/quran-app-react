import { Link } from "react-router-dom";

const ListSuratComponent = ({
  surah,
  lengthRequest,
  handleMoreClick,
  loadmore,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 xl:gap-3 my-5">
        {surah &&
          lengthRequest &&
          surah.slice(0, lengthRequest).map((item) => (
            <div
              className="flex items-center px-5 py-4 bg-teal-300 rounded-md border-2 border-teal-600 button-shadow-gradient-hover shadow-lg "
              key={item.number}
            >
              <div className="text-xl">{item.number}</div>
              <div className="ml-5 flex-grow">
                <div className="text-xl">{item.name.transliteration.id}</div>
                <div>Pembukaan</div>
                <div className="text-sm">
                  {item.revelation.id} | {item.numberOfVerses} ayat
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-5xl font-serif">{item.name.short}</div>
                <div className="flex justify-end">
                  <button
                    // onClick={() => handleReadSurah(item.number)}
                    className="bg-teal-600 hover:bg-teal-200 hover:text-black border-2 border-teal-700 text-white px-2 rounded-md m-2"
                  >
                    <Link to={"/surah/" + item.number}>Baca Surat</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {loadmore && (
        <div className="flex">
          <button
            className="m-auto bg-teal-400 p-3 rounded-lg hover:bg-teal-700 hover:text-white"
            onClick={handleMoreClick}
          >
            Tampilkan lebih
          </button>
        </div>
      )}
    </>
  );
};

export default ListSuratComponent;
