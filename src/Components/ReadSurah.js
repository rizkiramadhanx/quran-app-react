import { useParams } from "react-router-dom";
import { FcInfo, FcLeft, FcSettings } from "react-icons/fc";
import ListAyat from "./ListAyat";
import { useEffect, useState } from "react";
import API from "../api/alquran-api";
import { Link } from "react-router-dom";

const ReadSurah = () => {
  const { number } = useParams();
  const [listAyat, setListAyat] = useState(null);

  const fetchData = () => {
    API.get("/surah/" + number).then((res) => {
      setListAyat(res.data.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full font-Inter py-5 min-h-screen">
      <div className="m-auto w-11/12">
        <div className="flex justify-between text-3xl items-center bg-teal-200 px-3 py-2 rounded-md">
          <div>
            <Link to={"/"}>
              <FcLeft />
            </Link>
          </div>
          <div className="text-xl font-bold">
            {listAyat && listAyat.name.transliteration.id}
          </div>
          <div className="flex">
            <FcInfo />
            <FcSettings className="ml-2" />
          </div>
        </div>
        <div>
          <ListAyat data={listAyat} />
        </div>
      </div>
    </div>
  );
};

export default ReadSurah;
