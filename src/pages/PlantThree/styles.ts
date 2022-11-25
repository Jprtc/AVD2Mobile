import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { TextInput } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';


export const Container = styled.View`
    flex:1;
    background-color: ${({theme}) => theme.colors.background};
    align-items: center;
    justify-content: center;
`

export const MainHeading = styled.Text`
    font-size: ${RFValue(26)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    text-align: center;
    color: ${({ theme }) => theme.colors.heading};
    margin-bottom: 40px;
`

export const EmojiContainer = styled.View`
    margin-bottom: 40px;
`

export const EmojiIcon = styled(Ionicons)``

export const CustomInput = styled(TextInput)`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.gray};
`
export const BottomLine = styled.View`
    width:75%;
    height: 2px;
    background-color: ${({theme }) => theme.colors.gray};
    margin-bottom: 60px;

`