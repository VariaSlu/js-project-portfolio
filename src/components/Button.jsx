import styled from "styled-components";

// Simple styled button with default and hover states
const StyledButton = styled.button`
  /* Base styling */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 40px;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 600;
background: #F5F5F5;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  /* Colors based on variant */
  background-color: ${props => {
    switch (props.variant) {
      case "primary": return "#0047FF";
      case "secondary": return "#FA5252";
      case "tertiary": return "#FFD43B";
      default: return "#F5F5F5";
    }
  }};
  
  color: ${props => {
    switch (props.variant) {
      case "tertiary": return "#333333";
      case "primary":
      case "secondary": return "#FFFFFF";
      default: return "#333333";
    }
  }};
    
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

/**
 * Button Component
 * @param {React.ReactNode} children - Button text content
 * @param {React.ReactNode} icon - Icon component to display
 * @param {string} variant - Button style variant (primary, secondary, tertiary, default)
 * @param {function} onClick - Click handler function
 */
export const Button = ({
  children,
  icon,
  variant = "default",
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </StyledButton>
  )
}