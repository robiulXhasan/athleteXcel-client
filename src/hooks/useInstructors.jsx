import { useEffect, useState } from "react";

const useInstructors = () => {
  const [instructors, setInstructor] = useState([]);
  useEffect(() => {
    fetch("/instructors.json")
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data);
      });
  }, []);
  return instructors;
};
export default useInstructors;
