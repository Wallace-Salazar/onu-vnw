import React from "react";
import * as S from "./Style";
import Desenvolvimento from "./Assets/Desenvolvimento.jpg";

export default function Desen() {
  return (
    <S.Container>
      <S.Banner src={Desenvolvimento} alt="" />
      <S.Titulo>Desenvolvimento Sustentável em Paraiba do Sul</S.Titulo>
      <S.SubTitulo>Pequenas atitudes para combater o desmatamento</S.SubTitulo>
      <S.Paragrafos>
        1- Hortas Urbanas: Caracterizam-se hortas urbanas como sendo o plantio
        de hortaliças, condimentos e ervas medicinais em algum espaço público ou
        privado urbano.
      </S.Paragrafos>
      <S.Paragrafos>
        2- A criação de corredores verdes urbanos (CVU) são um conjunto de áreas
        verdes, dispostas no sistema de espaços livres públicos, promovendo a
        manutenção do bioma local, com a preservação da fauna e flora nativa;
        melhoria da qualidade do ar.
      </S.Paragrafos>
      <S.Paragrafos>
        3- Aplicação da legislação ambiental por meio da fiscalização e da
        punição de crimes ambientais dando uma bonificação para produtores
        rurais e outros atores econômicos que contribuem para a preservação de
        áreas de floresta, atrevés de uma unidades de conservação e preservação
        ambiental com foco em regiões com alta biodiversidade.
      </S.Paragrafos>
      <S.Paragrafos>
        4- Sempre que possível, use papel reciclado e reaproveite o máximo de
        papel nas suas impressões. O motivo é óbvio: quanto mais papel
        utilizamos, mais árvores são derrubadas. Por isso, aposte nos rascunhos
        e em folhas recicladas, elas podem ajudar muito a combater o
        desmatamento!
      </S.Paragrafos>
    </S.Container>
  );
}
