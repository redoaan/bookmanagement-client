import React, { useState } from "react";

const Form2 = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          name="bookname"
          value={inputs.bookname || ""}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Enter your Publisher Name:
        <input
          type="text"
          name="pubname"
          value={inputs.pubname || ""}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Age of Publisher:
        <input
          type="number"
          name="ageofpub"
          value={inputs.ageofpub || ""}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Page Number of Book:
        <input
          type="number"
          name="pagenoumofbook"
          value={inputs.pagenoumofbook || ""}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Publish Date:
        <input
          type="date"
          name="publishdate"
          value={inputs.publishdate || ""}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <input type="submit" />
    </form>
  );
};

export default Form2;
