import React from "react";
import * as S from "./Style";
import Saneamento from "./Assets/Saneamento.jpg";

export default function Saneament() {
  return (
    <S.Container>
      <S.Banner src={Saneamento} alt="" />
      <S.Titulo>Saneamento Básico em Paraiba do sul</S.Titulo>
      <S.SubTitulo>
        As possíveis soluções para diminuir a ociosidade na rede de esgoto.
      </S.SubTitulo>
      <S.Paragrafos>
        1- As empresas de saneamento básico podem investir em campanhas
        educativas acerca da importância do serviço para promoção e proteção da
        saúde e do meio ambiente.
      </S.Paragrafos>
      <S.Paragrafos>
        2- Embora os governos sejam responsáveis pela coleta e tratamento de
        esgoto, ainda existem locais onde a população não tem acesso ao
        saneamento. Uma alternativa é instalar fossas e sumidouros para tratar o
        esgoto, o que reduziria a proliferação de doenças e menos danos ao meio
        ambiente. Além disso, é fundamental descartar o lixo de forma correta, e
        se possível, produzir menos lixo.
      </S.Paragrafos>
      <S.Paragrafos>
        3- Com a aprovação do novo Marco do Saneamento Básico, abriu o caminho
        para investimentos de empresas privadas, uma vez que podem competir
        agora com companhias públicas. E quem acaba ganhando com tudo isso é a
        população, por ter mais acesso aos serviços básicos de abastecimento de
        água e coleta de esgoto.
      </S.Paragrafos>
      <S.Paragrafos>
        4- Formar um grupo de voluntários do saneamento local e convidar os
        moradores e a prefeitura para ajudar, alem de organizar reuniões de
        estudo nos espaços da comunidade para melhorar o saneamento básico, para
        que possamos descrever os problemas causados pela falta de coleta e
        tratamento de esgoto;
      </S.Paragrafos>
    </S.Container>
  );
}
