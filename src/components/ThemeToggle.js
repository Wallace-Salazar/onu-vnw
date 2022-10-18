import React, { useContext } from "react";
import styled, { ThemeProvider, ThemeContext } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ToggleContainer = styled.div`
  height: 40px;
  width: 100px;
  display: flex;
  flex-direction: ${(props) =>
    props.theme.name === "light" ? "row" : "row-reverse"};
  background-color: ${(props) => props.theme.themeToggle.container.background};
  color: ${(props) => props.theme.themeToggle.container.text};
  align-items: center;
  border-radius: 50px;
  padding: 5px 7px;
`;

const ToggleButton = styled.button`
  border: 0;
  background-color: ${(props) => props.theme.themeToggle.button.background};
  color: ${(props) => props.theme.themeToggle.button.text};
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
`;

const ToggleText = styled.p`
  text-transform: uppercase;
  margin: 0;
  padding: 0 10px;
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <ToggleContainer>
        <ToggleButton onClick={toggleTheme}>
          {theme.name === "light" ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </ToggleButton>
        <ToggleText>{theme.name}</ToggleText>
      </ToggleContainer>
    </ThemeProvider>
  );
};

export default ThemeToggle;
