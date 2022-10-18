import { ThemeToggle, SomeComponent } from "./components";
import { ThemeContext } from "styled-components";
import { useThemes } from "./hooks";
import { GlobalStyles } from "./themes";
import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import * as S from "./Pages/StylesApp";
import Saneamento from "./Pages/Saneamento";
import Igualdade from "./Pages/Igualdade";
import Moradia from "./Pages/Moradia";
import Desenvolvimento from "./Pages/Desenvolvimento";
import Coleta from "./Pages/Coleta";
import Educação from "./Pages/Educação";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}`;
const Navegação = styled(Link)`
  color: #000000;
  text-decoration: none;
  background-color: #ffffff;
  padding: 0.7vh;
  border-radius: 50px;
  transition: all 0.9s;
  &:hover {
    transform: scale(1.3);
    font-weight: bold;
  }
`;

const App = () => {
  const [theme, toggleTheme] = useThemes();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <GlobalStyles theme={theme} />
      <ThemeToggle />
      <SomeComponent />
      <S.Container>
        <S.BoxDialogo>
          <S.h1>Paraiba do sul</S.h1>
          <S.P>
            Paraíba do Sul é o município pioneiro da Serra Fluminense,
            disseminadora de civilização no que se chamava no século XVIII
            Sertão da Parahyba e que fazia parte da Capitania do Paraíba do Sul.
          </S.P>
          <S.P>
            O município nasceu junto a um remanso descoberto no rio Paraíba do
            Sul em 1681 por Garcia Rodrigues Paes filho de Fernão Dias Paes
            Leme. O moço de 20 anos sabia que o raro remanso do caudaloso rio
            estava em cima da cidade do Rio de Janeiro.
          </S.P>
        </S.BoxDialogo>
        <Router>
          <GlobalStyle />
          <nav>
            <S.Ul>
              <S.div1>
                <Navegação to="/Coleta">Coleta.Seletiva</Navegação>
              </S.div1>
              <S.div2>
                <Navegação to="/Igualdade">Igualdade</Navegação>
              </S.div2>
              <S.div3>
                <Navegação to="/Saneamento">Saneamento</Navegação>
              </S.div3>
            </S.Ul>
            <S.Ul>
              <S.div4>
                <Navegação to="/Moradia">Moradia</Navegação>
              </S.div4>
              <S.div5>
                <Navegação to="/Desenvolvimento">Desenvolvimento</Navegação>
              </S.div5>
              <S.div6>
                <Navegação to="/Educação">Educação</Navegação>
              </S.div6>
            </S.Ul>
          </nav>
          <Routes>
            <Route path="/Saneamento" element={<Saneamento />} />
            <Route path="/Igualdade" element={<Igualdade />} />
            <Route path="/Moradia" element={<Moradia />} />
            <Route path="/Desenvolvimento" element={<Desenvolvimento />} />
            <Route path="/Coleta" element={<Coleta />} />
            <Route path="/Educação" element={<Educação />} />
          </Routes>
        </Router>
      </S.Container>
    </ThemeContext.Provider>
  );
};

export default App;
