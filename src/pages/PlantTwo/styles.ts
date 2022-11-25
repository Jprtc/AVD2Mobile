import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex:1;
    background-color: ${({theme}) => theme.colors.background};
    align-items: center;
    justify-content: center;
`

export const ImageContainer = styled.View`
    margin-bottom: 40px;
    margin-top:40px;
`

export const HeadingText = styled.Text`
    font-size: ${RFValue(26)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    text-align: center;
    color: ${({ theme }) => theme.colors.body_light};
`

export const LowerTextContainer = styled.View`
    width:80%;
    margin-bottom: 20px;
`

export const LowerText = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    text-align: center;
`

export const Photo = styled.Image`
  width: ${RFValue(240)}px;
  height: ${RFValue(240)}px;
`;


export const StyledButton = styled(RectButton)`
    height: 60px;
    width: 60px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.green};
    align-items: center;
    justify-content: center;
`

export const ButtonChevron = styled.Text`
    font-size: ${RFValue(40)}px;
    color:white;
`