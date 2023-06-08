import { useEffect, useState } from "react";

const useClasses = () => {
  const [classes, setClass] = useState([]);
  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => {
        setClass(data);
      });
  }, []);
  return classes;
};
export default useClasses;
