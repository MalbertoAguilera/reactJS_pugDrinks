import React from "react";

const FormCheckOut = ({handleSubmit, handleInputChange, values}) => {

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={values.name}
          onChange={handleInputChange}
          name="name"
          required
        />
        <input
          type="text"
          value={values.lastName}
          onChange={handleInputChange}
          name="lastName"
          required
        />
        <input
          type="text"
          value={values.phone}
          onChange={handleInputChange}
          name="phone"
          required
        />
        <input
          type="email"
          value={values.email}
          onChange={handleInputChange}
          name="email"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormCheckOut;
