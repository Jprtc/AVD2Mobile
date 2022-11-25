import { ScrollView } from "react-native-gesture-handler";
import { GreenButton } from "../../components/GreenButton";
import { AmbientText, ButtonLabel, Container, Header, HorizontalScrollView, HugeText, Photo, StyledSmallButton } from "./styles";



export function PlantFive(){
    return (
        <Container>
            <Header>
                <HugeText>Olá, {'\n'} Tiago</HugeText>
                <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/13595261?v=4' }}/>
            </Header>
            <AmbientText>
            Em qual ambiente {'\n'}você quer colocar sua planta?
            </AmbientText>
            <HorizontalScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 24 }}>
            <StyledSmallButton><ButtonLabel>Sala</ButtonLabel></StyledSmallButton>
            <StyledSmallButton><ButtonLabel>Quarto</ButtonLabel></StyledSmallButton>
            <StyledSmallButton><ButtonLabel>Cozinha</ButtonLabel></StyledSmallButton>
            <StyledSmallButton><ButtonLabel>Banheiro</ButtonLabel></StyledSmallButton>
            <StyledSmallButton><ButtonLabel>Suíte</ButtonLabel></StyledSmallButton>
            <StyledSmallButton><ButtonLabel>Playground</ButtonLabel></StyledSmallButton>
            <StyledSmallButton><ButtonLabel>Varanda</ButtonLabel></StyledSmallButton>
            </HorizontalScrollView>
        </Container>
    )
}