import { Box, Button, Typography } from "@mui/material";
import React from "react";
import theme from "../../../Utils/theme";
import { messages } from "../../../Utils/constants";
const ChatTabStyles = {
  ChatBot: {
    height: "30rem",
    mt: "1rem",
  },
  ChatBox: {
    display: "grid",
    height: "100%",
    padding: "1rem",
    gridTemplateRows: "2fr 8fr 1fr",
    backgroundColor: "aliceblue",
  },
  ChatInput: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2px",
  },
  input: {
    width: "100%",
    border: "none",
    height: "50%",
    padding: "5px",
  },
  messages: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    overflow: "scroll",
    scrollbarWidth: "thin", // Width of the scrollbar
    scrollbarColor: "#f1f1f1",
    border: "1px solid grey",
    padding: "5px",
  },
  message: {
    width: "40%",
    padding: "1rem",
    borderRadius: "5px",
  },
  chatboxHeading: {
    textAlign: "center",
  },
};
const ChatTab = () => {
  return (
    <Box sx={ChatTabStyles.ChatBot}>
      <Box sx={ChatTabStyles.ChatBox}>
        <Box sx={ChatTabStyles.chatboxHeading}>
          <Typography variant="h5">Project ChatBox</Typography>
        </Box>
        <Box sx={ChatTabStyles.messages}>
          {messages.map((a) => {
            return (
              <Box
                sx={{
                  ...ChatTabStyles.message,
                  alignSelf: a.sender ? "flex-start" : "flex-end",
                  backgroundColor: a.sender
                    ? theme.palette.secondary.main
                    : "white",
                  color: a.sender ? "white" : "black",
                }}
              >
                {a.msg}
              </Box>
            );
          })}
        </Box>
        <Box sx={ChatTabStyles.ChatInput}>
          <input style={ChatTabStyles.input} />
          <Button variant="contained">Send</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatTab;
