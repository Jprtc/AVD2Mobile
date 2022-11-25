import { Text } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'
import { StyledGreenButton, StyledLabel } from './styles'


interface GreenButton extends RectButtonProps{
    label:string
}

export function GreenButton({label}:GreenButton){
    return (
        <StyledGreenButton>
            <StyledLabel>{label}</StyledLabel>
        </StyledGreenButton>
    )
}