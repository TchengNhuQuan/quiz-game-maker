import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import AnswerQuestionPage from "./components/AnswerQuestionPage";
import CreateQuizPage from "./components/CreateQuestionPage/createQuiz";
import LoginPage from "./components/LoginPage";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      {/* <AnswerQuestionPage /> */}
      {/* <CreateQuizPage /> */}
      <LoginPage />
    </Box>
  </ChakraProvider>
);
