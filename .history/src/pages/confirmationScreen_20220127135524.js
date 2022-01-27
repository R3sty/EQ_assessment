import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  marginAutoContainer: {
    marginTop: 10,
    padding: "6rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    boxShadow: "0px 0px 10px #DCDCDC",
  },
});

const ConfirmationScreen = () => {
  const classes = useStyles();
  return (
    <Box>
      <h1>Check your inbox for the full results!</h1>
    </Box>
  );
};

export default ConfirmationScreen;
