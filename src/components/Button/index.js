import { ButtonContainer } from "./styles";

function Button({label, variant="primary", onClick}) {
    return (
      <ButtonContainer variant={variant} onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;