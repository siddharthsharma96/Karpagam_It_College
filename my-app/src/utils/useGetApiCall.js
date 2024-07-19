import { useState, useEffect } from "react";

const useGetApiCall = (urlfectch) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(urlfectch);
    setLoading(true);
    if (response.status === 200) {
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
  };

  //   hint1 : where
  useEffect(() => {
    getData();
  }, [urlfectch]);

  return { data, loading, getData };
};

export default useGetApiCall;
