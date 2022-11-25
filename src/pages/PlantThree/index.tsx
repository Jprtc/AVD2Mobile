import { GreenButton } from "../../components/GreenButton";
import { BottomLine, Container, CustomInput, EmojiContainer, EmojiIcon, MainHeading } from "./styles";



export function PlantThree(){
    return (
        <Container>
            <EmojiContainer><EmojiIcon size={48} name="happy" color="#edf100"/></EmojiContainer>
            <MainHeading>Como Podemos {'\n'} chamar você?</MainHeading>
                <CustomInput defaultValue="Digite um Nome"/>
                <BottomLine></BottomLine>
                <GreenButton label="Confirmar"/>
        </Container>
    )
}