import { useEffect, useState } from "react";

const useInstructors = () => {
  const [instructors, setInstructor] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data);
      });
  }, []);
  return instructors;
};
export default useInstructors;
