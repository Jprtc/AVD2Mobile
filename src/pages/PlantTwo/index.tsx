import { ButtonChevron, Container, HeadingText, ImageContainer, LowerText, LowerTextContainer, Photo, StyledButton } from "./styles";
import WateringPlant from '../../assets/watering.png';

export function PlantTwo(){
    return (
        <Container>
            <HeadingText>Gerencie {'\n'} suas plantas de {'\n'} forma fácil</HeadingText>
            <ImageContainer>
                <Photo source={WateringPlant}/>
            </ImageContainer>
            <LowerTextContainer>
            <LowerText>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.</LowerText>
            </LowerTextContainer>
            <StyledButton><ButtonChevron>{">"}</ButtonChevron></StyledButton>
        </Container>
    )
}