import React from "react";

export default function CurrentDate() {
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    setCurrentDate(date + "/" + month + "/" + year + "/" + hours);
  }, []);
  return <div>{CurrentDate.toString}</div>;
}
