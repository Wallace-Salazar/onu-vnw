import React from "react";
import * as S from "./Style";
import Moradia from "./Assets/Moradia.jpg";

export default function Moradi() {
  return (
    <S.Container>
      <S.Banner src={Moradia} alt="" />
      <S.Titulo>Moradia em Paraiba do sul</S.Titulo>
      <S.SubTitulo>
        A falta de Moradia de qualidade é uma coisa grave.
      </S.SubTitulo>
      <S.Paragrafos>
        1- Consiste na integração de três componentes: acesso a crédito;
        produção e difusão de soluções e técnicas alternativas para construção e
        reforma de moradias para famílias de baixa renda; e assistência técnica
        para que as famílias construam ou reformem suas moradias com eficiência
        – usando de forma racional os recursos, com menos desperdício e com
        sustentabilidade – ambiental e econômica.
      </S.Paragrafos>
      <S.Paragrafos>
        2- Assistência técnica é o projeto arquitetônico – orientado para um
        modelo sustentável de moradia. Os técnicos seguem acompanhando as obras
        durante todo o período de construção/reforma. É importante salientar que
        a tecnologia não consiste apenas no atendimento às famílias.
      </S.Paragrafos>
      <S.Paragrafos>
        3- Subsídio para moradia de aluguel: muitas famílias não têm poder
        aquisitivo para comprar uma casa. Uma alternativa eficaz é a moradia
        para aluguel e subsídios diretos para aluguel. Essa estratégia tem
        múltiplos benefícios, incluindo maior flexibilidade para demanda e
        localização mais central.{" "}
      </S.Paragrafos>
      <S.Paragrafos>
        4- Aluguel com opção de compra: esses programas buscam combinar as
        vantagens do aluguel e da propriedade canalizando parte do pagamento do
        aluguel para uma possível compra da unidade. Isso facilita a mobilidade
        das famílias e evita os custos de transação associados à propriedade,
        oferecendo uma garantia de compra, caso os ocupantes optem por isso.
      </S.Paragrafos>
    </S.Container>
  );
}
