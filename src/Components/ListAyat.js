const ListAyat = ({ data }) => {
  return (
    <>
      {data &&
        data.verses.map((ayat, i) => (
          <div
            className="bg-teal-100 shadow-lg mt-5 py-2 px-3 rounded-md"
            key={i + 1}
          >
            <div className="inline font-bold">{i + 1}</div>
            <div className="flex flex-col">
              <div className="text-right text-2xl md:text-4xl sm:pr-2">
                {ayat.text.arab}
              </div>
              <div className="text-sm text-right md:text-lg mt-1 sm:pr-2 italic pl-5">
                {ayat.text.transliteration.en}
              </div>
              <div className="text-sm md:text-lg mt-4 sm:pl-5">
                {ayat.translation.id}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ListAyat;
