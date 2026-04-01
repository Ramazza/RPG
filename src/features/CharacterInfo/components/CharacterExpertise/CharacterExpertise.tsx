import Expertise from './Expertise/Expertise';
import { expertiseData } from "../CharacterExpertise/Expertise/ExpertiseInfo";
import * as S from './styles';

function CharacterExpertise() {
  return (
    <S.Container>
      <S.Title>PERÍCIAS</S.Title>

      <S.Wrapper>
        <S.Text style={{ justifySelf: "start" }}>PERÍCIA</S.Text>
        <S.Text>DADOS</S.Text>
        <S.Text>BÔNUS</S.Text>
        <S.Text>TREINO</S.Text>
        <S.Text>OUTROS</S.Text>
      </S.Wrapper>

      {expertiseData.map((item) => (
        <Expertise
          key={item.pericia}
          pericia={item.pericia}
          dado={item.dado}
        />
      ))}

      <S.Footer>
        + Penalidade de carga. * Somente treinada.
      </S.Footer>
    </S.Container>
  );
}

export default CharacterExpertise;