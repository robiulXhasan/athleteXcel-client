import { useEffect, useState } from "react";

const useInstructors = () => {
  const [instructors, setInstructor] = useState([]);
  useEffect(() => {
    fetch("https://summer-camp-school-server-kohl.vercel.app/users/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data);
      });
  }, []);
  return instructors;
};
export default useInstructors;
