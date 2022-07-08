import React, { useState, useEffect } from "react";
import DentistListItem from "../../components/dentists";
import { TextButton } from "../../components/buttons";
import { SingleLineTextInput } from "../../components/input";

function HomeScreen() {
  const [dentists, setDentists] = useState();
  const [foundDentists, setFoundDentists] = useState([]);

  const filter = (e) => {
    const keyword = e.target.value;

    console.log("HERE");

    if (keyword !== "") {
      const results = dentists.filter((user) => {
        return user.firstName.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundDentists(results);
    } else {
      setFoundDentists(dentists);
    }
  };

  async function fetchDentists() {
    const response = await fetch(
      "https://yb67zyc3bj.execute-api.us-east-2.amazonaws.com/prod"
    );
    const json = await response.json();
    setDentists(json);
    setFoundDentists(json);
  }

  useEffect(() => {
    fetchDentists();
  }, []);

  return (
    <div className="flex flex-col items-center py-6 px-4">
      <div className="container flex justify-start">
        <TextButton label="Logout" to="/"></TextButton>
      </div>
      <SingleLineTextInput
        id="search"
        type="search"
        placeholder="search"
        onChange={filter}
      ></SingleLineTextInput>
      <div className="justify-start">
        {foundDentists && foundDentists.length > 0 ? (
          foundDentists.map((dentist) => {
            return (
              <DentistListItem
                firstName={dentist.firstName}
                lastName={dentist.lastName}
                number={dentist.number}
              />
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
