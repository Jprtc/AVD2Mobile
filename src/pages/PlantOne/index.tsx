import { RFValue } from "react-native-responsive-fontsize";
import {
  BoldGreenText,
  Container,
  ImageContainer,
  LogoText,
  Photo,
} from "./styles";
import PlantLogo from "../../assets/icon.png";

export function PlantOne() {
  return (
    <Container>
      <ImageContainer>
        <Photo source={PlantLogo} />
      </ImageContainer>
      <LogoText>
        <BoldGreenText>Plant</BoldGreenText>Manager
      </LogoText>
    </Container>
  );
}
