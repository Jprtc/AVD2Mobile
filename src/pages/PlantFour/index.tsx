import { GreenButton } from "../../components/GreenButton";
import { Container, EmojiContainer, EmojiIcon, LowerText, MainHeading } from "./styles";



export function PlantFour(){
    return (
        <Container>
            <EmojiContainer>
                <EmojiIcon size={88} name="laugh-beam" color="#edf100"/>
            </EmojiContainer>
            <MainHeading>Prontinho</MainHeading>
            <LowerText>Agora vamos começar a cuidar das suas plantinhas com muito cuidado</LowerText>
                <GreenButton label="Começar"/>
        </Container>
    )
}