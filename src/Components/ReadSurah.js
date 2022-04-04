import { useParams } from "react-router-dom";
import { FcInfo, FcLeft, FcSettings } from "react-icons/fc";
import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";
import ListAyat from "./ListAyat";
import { useEffect, useState } from "react";
import API from "../api/alquran-api";
import { Link } from "react-router-dom";

const ReadSurah = () => {
  const { number } = useParams();
  const [listAyat, setListAyat] = useState(null);
  const [loadmore, setLoadmore] = useState(true);
  const [length, setLength] = useState(20);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibility, setVisibilty] = useState({
    arab: true,
    latin: true,
    translate: true,
  });
  const [toggle, setToggle] = useState({
    info: false,
    setting: false,
  });

  const fetchData = () => {
    API.get("/surah/" + number)
      .then((res) => {
        setListAyat(res.data.data);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleMoreClick = () => {
    setLength((prev) => prev + 40);
  };

  const handleClickInfo = () => {
    const newToggle = {
      ...toggle,
      info: toggle.info === true ? false : true,
    };

    setToggle(newToggle);
  };

  const handleClickSetting = () => {
    const newToggle = {
      ...toggle,
      setting: toggle.setting === true ? false : true,
    };

    setToggle(newToggle);
  };

  const handleClickVisibilityArab = () => {
    const newVisibilty = {
      ...visibility,
      arab: visibility.arab === true ? false : true,
    };
    setVisibilty(newVisibilty);
  };

  const handleClickVisibilityLatin = () => {
    const newVisibilty = {
      ...visibility,
      latin: visibility.latin === true ? false : true,
    };
    setVisibilty(newVisibilty);
  };

  const handleClickVisibilityArti = () => {
    const newVisibilty = {
      ...visibility,
      arti: visibility.arti === true ? false : true,
    };
    setVisibilty(newVisibilty);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full font-Inter py-5 min-h-screen">
      <div>
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
            <div className="flex relative">
              <FcInfo className="hover:rotate-12" onClick={handleClickInfo} />
              <div className={`justify-end ${toggle.info ? "flex" : "hidden"}`}>
                <div className="absolute text-base rounded-md bg-teal-400 h-auto sm:w-96 w-80 top-10">
                  <div className="px-5 py-2 text-black">
                    <div>{listAyat && listAyat.tafsir.id}</div>
                  </div>
                </div>
              </div>
              <FcSettings
                className="ml-2 hover:rotate-45"
                onClick={handleClickSetting}
              />
              <div
                className={`justify-end ${toggle.setting ? "flex" : "hidden"}`}
              >
                <div className="absolute text-base opacity-90 rounded-md w-32 top-10 bg-teal-400">
                  <div className="text-center p-2">Visibility</div>
                  <hr />
                  <div className="px-5 py-2 text-black">
                    <div onClick={handleClickVisibilityArab}>
                      {visibility.arab ? (
                        <AiFillEye className="inline mr-4" />
                      ) : (
                        <AiOutlineEyeInvisible className="inline mr-4" />
                      )}
                      Arab
                    </div>
                    <div onClick={handleClickVisibilityLatin}>
                      {visibility.latin ? (
                        <AiFillEye className="inline mr-4" />
                      ) : (
                        <AiOutlineEyeInvisible className="inline mr-4" />
                      )}
                      Latin
                    </div>
                    <div onClick={handleClickVisibilityArti}>
                      {visibility.arti ? (
                        <AiFillEye className="inline mr-4" />
                      ) : (
                        <AiOutlineEyeInvisible className="inline mr-4" />
                      )}
                      Arti
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {error && (
              <div className="text-center text-red-500 mt-5 text-xl">
                Maaf terjadi error ukhti... 😥😥😥
              </div>
            )}
            {loading && (
              <div className="text-center text-blue-500 mt-5 text-xl">
                mohon ditunggu... ✨✨✨
              </div>
            )}
            {listAyat && (
              <ListAyat
                data={listAyat}
                loadmore={loadmore}
                lengthRequest={length}
                handleMoreClick={handleMoreClick}
                visibility={visibility}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadSurah;
