import { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import ListSuratComponent from "./ListSuratComponent";
import API from "../api/alquran-api";

const SuratList = () => {
  const [surah, setSurah] = useState(null);
  const [length, setLength] = useState(20);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    if (search === "") {
      API.get("surah").then((response) => {
        setSurah(response.data.data);
      });
    } else {
      API.get("surah").then((response) => {
        setSurah(
          response.data.data.filter(
            (item) => item.transliteration.id === search
          )
        );
      });
    }
  };

  const handleMoreClick = () => {
    setLength((prev) => prev + 20);
  };
  const HandleChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="w-full font-Inter py-5 min-h-screen">
      <div className="m-auto w-11/12">
        <div className="flex justify-end">
          <div className="flex items-center shadow-xl pl-5 border-2 border-slate-500 rounded-2xl">
            <div>
              <FcSearch />
            </div>
            <input
              type="text"
              className="ml-3 bg-transparent py-1 px-2 focus:outline-none"
              placeholder="Cari surat..."
              onChange={HandleChangeSearch}
              value={search}
            />
          </div>
        </div>
        {surah && <ListSuratComponent surah={surah} lengthRequest={length} />}
        <div className="flex">
          <button
            className="m-auto bg-teal-400 p-3 rounded-lg hover:bg-teal-700 hover:text-white"
            onClick={handleMoreClick}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuratList;
