import { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import ListSuratComponent from "./ListSuratComponent";
import API from "../api/alquran-api";

const SuratList = () => {
  const [surah, setSurah] = useState(null);
  const [length, setLength] = useState(20);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadmore, setLoadmore] = useState(true);

  const fetchData = () => {
    if (search === "") {
      API.get("surah")
        .then((response) => {
          setSurah(response.data.data);
          setError(false);
        })
        .catch((err) => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleMoreClick = () => {
    setLength((prev) => prev + 20);
  };
  const HandleChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    if (search !== "") {
      setSurah(
        surah.filter(
          (items) =>
            items.name.transliteration.id
              .toLowerCase()
              .includes(search.toLocaleLowerCase()) ||
            items.name.transliteration.id.toLocaleLowerCase() ===
              search.toLocaleLowerCase()
        )
      );
      setLoadmore(false);
    } else {
      setLoadmore(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full font-Inter py-5 min-h-screen">
      <div className="m-auto w-11/12">
        <div className="flex justify-end">
          <div className="flex items-center shadow-xl sm:pl-5 pl-1 border-2 border-slate-500 rounded-2xl">
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
        {error && (
          <div className="text-center text-red-500 mt-5 text-xl">
            Maaf terjadi error 😥😥😥
          </div>
        )}
        {loading && (
          <div className="text-center text-blue-500 mt-5 text-xl">
            mohon ditunggu... ✨✨✨
          </div>
        )}

        {surah && (
          <ListSuratComponent
            surah={surah}
            lengthRequest={length}
            handleMoreClick={handleMoreClick}
            search={search}
            loadmore={loadmore}
          />
        )}
      </div>
    </div>
  );
};

export default SuratList;
