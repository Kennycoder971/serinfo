import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axiosReq from "../../utils/axiosReq";
import ShowPage from "../../ui/page/ShowPage/ShowPage";

export default function Show() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [show, setShow] = useState({});
  const [cast, setCast] = useState([]);

  useEffect(() => {
    (async () => {
      const urlTerm = location?.pathname.split("/shows/").join("");
      const url = `${process.env.NEXT_PUBLIC_API_URL}/shows/${
        router.query.id || urlTerm
      }`;
      try {
        const { data, error } = await axiosReq(url, "get");
        if (error) throw new Error();
        setShow(data);

        const castUrl = `${url}/cast`;
        const { data: castData, errorCast } = await axiosReq(castUrl, "get");
        if (errorCast) throw new Error();
        setCast(castData);
      } catch (error) {
        setError("Something went wrong, try again later");
      }
    })();
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }
  return <ShowPage show={show} cast={cast} error={error} />;
}
