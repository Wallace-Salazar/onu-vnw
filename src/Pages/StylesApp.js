import styled from "styled-components";
import Saneamento from "./Assets/Saneamento.jpg";
import Igualdade from "./Assets/Igualdade.jpg";
import Coleta from "./Assets/Coleta.jpg";
import Moradia from "./Assets/Moradia.jpg";
import Desenvolvimento from "./Assets/Desenvolvimento.jpg";
import Educação from "./Assets/Educação.jpg";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const BoxDialogo = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const h1 = styled.h1`
  font-size: 70px;
  font-family: "Times New Roman", Times, serif;
  @media (max-width: 400px) {
    font-size: 60px;
    margin-top: 30vh;
  }
`;
export const P = styled.p`
  width: 120vh;
  text-indent: 4vh;
  @media (max-width: 400px) {
    width: 55vh;
    height: 30vh;
    font-size: 20px;
    margin-bottom: 3vh;
  }
`;
export const Ul = styled.ul`
  height: 50;
  display: flex;
  flex-direction: row;
  @media (max-width: 400px) {
    width: 55vh;
  }
`;
export const div1 = styled.li`
  width: 35vh;
  height: 25vh;
  background-image: url(${Coleta});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  border: solid 3px;
  margin: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-size: cover;
  @media (max-width: 400px) {
    margin-top: 30vh;
    height: 0vh;
    background-size: cover;
    border: none;
  }
`;
export const div2 = styled.li`
  width: 35vh;
  height: 25vh;
  background-image: url(${Igualdade});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  border: solid 3px;
  margin: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-size: cover;
  @media (max-width: 400px) {
    margin-top: 30vh;
    height: 0vh;
    background-size: cover;
    border: none;
  }
`;
export const div3 = styled.li`
  width: 35vh;
  height: 25vh;
  border: solid 3px;
  background-image: url(${Saneamento});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  margin: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-size: cover;
  @media (max-width: 400px) {
    margin-top: 30vh;
    height: 0vh;
    background-size: cover;
    border: none;
  }
`;
export const div4 = styled.li`
  width: 35vh;
  height: 25vh;
  border: solid 3px;
  background-image: url(${Moradia});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  margin: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-size: cover;
  @media (max-width: 400px) {
    height: 0vh;
    margin-top: 5vh;
    margin-bottom: 4vh;
    background-size: cover;
    border: none;
  }
`;
export const div5 = styled.li`
  width: 35vh;
  height: 25vh;
  border: solid 3px;
  background-image: url(${Desenvolvimento});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  margin: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-size: cover;
  @media (max-width: 400px) {
    height: 0vh;
    margin-top: 5vh;
    margin-bottom: 4vh;
    background-size: cover;
    border: none;
  }
`;
export const div6 = styled.li`
  width: 35vh;
  height: 25vh;
  border: solid 3px;
  background-image: url(${Educação});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  margin: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-size: cover;
  @media (max-width: 400px) {
    height: 0vh;
    margin-top: 5vh;
    margin-bottom: 4vh;
    background-size: cover;
    border: none;
  }
`;
