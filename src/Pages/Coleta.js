import React from "react";
import * as S from "./Style";
import Coleta from "./Assets/Coleta.jpg";

export default function Colet() {
  return (
    <S.Container>
      <S.Banner src={Coleta} alt="" />
      <S.Titulo>Coleta de Seletiva em Paraiba do Sul</S.Titulo>
      <S.SubTitulo>
        Coleta seletiva de lixo consiste na separação e recolhimento dos
        resíduos descartados por empresas e pessoas.
      </S.SubTitulo>
      <S.Paragrafos>
        1- Os lixões atraem muitas pessoas em busca de trabalho, na função de
        catadores de lixo. Eles buscam qualquer material que possa ser
        reaproveitado para reciclagem. Essas pessoas que agem diretamente nos
        lixos estão sempre sujeitas a se contaminar, inclusive por não usar
        nenhum equipamento de segurança.
      </S.Paragrafos>
      <S.Paragrafos>
        2- Aterros tecnológicos: A proposta é que o próprio lixo combata a si
        mesmo por meio de processos que aceleram a decomposição de lixos
        orgânicos. No meio dos lixos descartados no local, são despejados
        refrigerantes e cervejas que também foram descartadas por estarem fora
        da validade, e o gás do produto é capaz de fazer a decomposição ser
        muito mais rápida do que a média esperada.
      </S.Paragrafos>
      <S.Paragrafos>
        3- O lixo que vira asfalto: O lixo hospitalar e metais pesados
        apresentam altíssimo risco de contaminação. Porém é possível
        transformá-lo em outros produtos, sem que ofereçam risco de contágio.
        Tudo porque esses materiais são transformados em pequenos graus que
        podem virar asfalto.
      </S.Paragrafos>
      <S.Paragrafos>
        4- Reduzir a quantidade de lixo produzida, priorizando produtos que
        possam ser reutilizáveis. Em seguida utilizar ao máximo o produto,
        retardando seu descarte o máximo possível, inclusive por meio do
        conserto.{" "}
      </S.Paragrafos>
    </S.Container>
  );
}
