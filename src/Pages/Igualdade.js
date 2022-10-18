import React from "react";
import * as S from "./Style";
import Igualdade from "./Assets/Igualdade.jpg";

export default function Igualdad() {
  return (
    <S.Container>
      <S.Bannerr src={Igualdade} alt="" />
      <S.Titulo>Igualdade de Gênero em Paraiba do sul</S.Titulo>
      <S.SubTitulo>
        A igualdade pelos mesmos direitos e deveres, sendo um conceito básico
        para construir uma sociedade livre de discriminações e preconceitos
      </S.SubTitulo>
      <S.Paragrafos>
        1- Responsáveis por crianças e adolescentes precisam de apoio de toda
        sociedade. Oferecer o assento do ônibus a uma mulher grávida, cobrar a
        implantação de fraldários em todos os banheiros de centros comerciais
        (não apenas no feminino) e pressionar pela garantia de licenças
        maternidade e paternidade nas empresas são ações necessárias.
      </S.Paragrafos>
      <S.Paragrafos>
        2- Questione os alunos a respeito da opinião sobre o tema e estimule
        debates sobre o amplo escopo que ele proporciona. Por que ainda existem
        homens com remuneração mais alta em relação às mulheres, mesmo exercendo
        a mesma função? Por que, em alguns casos, a mulher é marginalizada na
        sociedade a desempenhar funções consideradas inferiores?
      </S.Paragrafos>
      <S.Paragrafos>
        3- No trabalho, o racismo e os preconceitos que atingem frequentemente
        pessoas de grupos historicamente marginalizados tornam-se
        microagressões, ou seja, chacotas, piadas ou comentários ofensivos
        feitos muitas vezes sem intenção de ofender – mas que ofendem . Uma das
        formas de acabar com as microagressões é oferecer treinamentos sobre
        diversidade e preconceito implícito.
      </S.Paragrafos>
      <S.Paragrafos>
        4- É importante que os pais estejam alinhados à escola na busca pela
        equidade de gênero, já que essa consciência é construída em conjunto ao
        longo da vida. O ambiente escolar é a grande parte do ensino de um
        jovem, mas ele carrega para si exemplos vistos dentro de casa. Por isso,
        a importância de os docentes e os pais trabalharem em conjunto e
        sintonia.
      </S.Paragrafos>
    </S.Container>
  );
}
