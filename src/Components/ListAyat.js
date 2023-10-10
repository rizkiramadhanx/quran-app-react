const ListAyat = ({
  data,
  lengthRequest,
  handleMoreClick,
  loadmore,
  visibility,
}) => {
  const stop =
    data.verses.slice(0, lengthRequest).length === data.verses.length;
  return (
    <>
      {data &&
        visibility &&
        lengthRequest &&
        data.verses.slice(0, lengthRequest).map((ayat, i) => (
          <div
            className="bg-teal-100 shadow-lg mt-2 py-2 px-3 rounded-md"
            key={i + 1}
          >
            <div className="inline font-bold">{i + 1}</div>
            <div className="flex flex-col">
              <div
                className={`text-right text-2xl md:text-4xl sm:pr-2 ${
                  !visibility.arab && "hidden"
                }`}
              >
                {ayat.text.arab}
              </div>
              <div
                className={`text-sm text-right md:text-lg mt-1 sm:pr-2 italic pl-5 ${
                  !visibility.latin && "hidden"
                }`}
              >
                {ayat.text.transliteration.en}
              </div>
              <div
                className={`text-sm md:text-lg mt-4 sm:pl-5  ${
                  !visibility.arti && "hidden"
                }`}
              >
                {ayat.translation.id}
              </div>
            </div>
          </div>
        ))}
      {!stop && loadmore && (
        <div className="flex mt-5">
          <button
            className="m-auto bg-teal-400 p-1 rounded-lg hover:bg-teal-700 hover:text-white"
            onClick={handleMoreClick}
          >
            Tampilkan Lebih
          </button>
        </div>
      )}
    </>
  );
};

export default ListAyat;
