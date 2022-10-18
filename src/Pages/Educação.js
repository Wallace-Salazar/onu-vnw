import React from "react";
import * as S from "./Style";
import Educação from "./Assets/Educação.jpg";

export default function Educaçã() {
  return (
    <S.Container>
      <S.Banner src={Educação} alt="" />
      <S.Titulo>Educação em Paraiba do Sul</S.Titulo>
      <S.SubTitulo>
        Há uma série de ideias que, quando colocadas em prática de maneira
        assertiva, asseguram a qualidade do ensino.
      </S.SubTitulo>
      <S.Paragrafos>
        1- Ter uma biblioteca abastecida de livros, quadras amplas e bem
        estruturadas, laboratórios de informática e ciência bem equipados para
        que os alunos possam realizar pesquisas.
      </S.Paragrafos>
      <S.Paragrafos>
        2- A tecnologia é uma das principais ferramentas para melhorar a
        educação nas instituições de ensino. Pois, com o recuso, é possível
        implantar o uso de ferramentas e equipamentos tecnológicos de muitas
        maneiras diferentes, sendo uma das mais difundidas nos dias de hoje o
        uso de plataformas de ensino.
      </S.Paragrafos>
      <S.Paragrafos>
        3- Possibilitar o acesso a cursos de formação, assim como proporcionar
        que professores estejam sempre somando novos aprendizados por meio de
        palestras e oficinas, é essencial para que a qualidade do ensino passado
        em sala de aula seja sempre aprimorado.
      </S.Paragrafos>
      <S.Paragrafos>
        4- As escolas devem investir em mecanismos que possibilitem a
        qualificação social e profissional dos alunos, para que eles desenvolvam
        suas habilidades e possam sair da educação básica cientes de suas
        capacidades e afinidades, o que os ajudarão no processo de inserção do
        mercado de trabalho.
      </S.Paragrafos>
    </S.Container>
  );
}
