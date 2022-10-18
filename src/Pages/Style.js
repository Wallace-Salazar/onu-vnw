import styled from "styled-components";

export const Container = styled.section`
  height: 180vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const Banner = styled.img`
  height: 80vh;
  border: solid;
  @media (max-width: 400px) {
    height: 40vh;
    margin-top: 10px;
    border: none;
  }
`;
export const Bannerr = styled.img`
  height: 80vh;
  border: solid;
  @media (max-width: 400px) {
    height: 40vh;
    margin-top: 130px;
    border: none;
  }
`;
export const Titulo = styled.h2`
  width: 120vh;
  text-align: center;
  @media (max-width: 400px) {
    width: 55vh;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;
export const SubTitulo = styled.h3`
  width: 120vh;
  text-align: center;
  @media (max-width: 400px) {
    width: 55vh;
    text-align: center;
    margin-bottom: 30px;
  }
`;
export const Paragrafos = styled.p`
  width: 120vh;
  @media (max-width: 400px) {
    width: 55vh;
    height: 33vh;
    font-size: 18px;
    margin-bottom: 30px;
  }
`;
