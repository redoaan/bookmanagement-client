import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
const Form = () => {
  const [value, setValue] = useState();

  const handleSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const actualData = {
      bookname: data.get("bookname"),
      pubname: data.get("pubname"),
      ageofpub: data.get("ageofpub"),
      pagenoumofbook: data.get("pagenoumofbook"),
      pubdate: data.get("pubdate"),
    };
    console.log(actualData);
  };
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box sx={{ p: 5, m: 5, width: 400, boxShadow: 5 }}>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          id="registration-form"
          onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="bookname"
            name="bookname"
            label="Book Name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="pubname"
            name="pubname"
            label="Publisher Name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="ageofpub"
            type="number"
            name="ageofpub"
            label="Age of Publisher"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="pagenoumofbook"
            name="pagenoumofbook"
            type="number"
            label="Page Number of Book"
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DateField
                sx={{ width: "100%" }}
                id="pubdate"
                label="Publish Date"
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
