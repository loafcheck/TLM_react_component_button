import styled, { css } from "styled-components";

const SIZES = {
  sm: css`
    --button-font-size: 0.875rem;
    --button-padding: 8px 12px;
    --button-radius: 4px;
  `,
  md: css`
    --button-font-size: 1rem;
    --button-padding: 12px 16px;
    --button-radius: 8px;
  `,
  lg: css`
    --button-font-size: 1.25rem;
    --button-padding: 16px 20px;
    --button-radius: 12px;
  `
};

const VARIANTS = {
  normal: css`
    --button-color: #ffffff;
    --button-bg-color: #ff5733;
    /* --button-hover-bg-color: #6E6A68; */
  `,
  disabled: css`
    --button-color: #ffffff;
    --button-bg-color: #fe9a85;
    /* --button-hover-bg-color: #6E6A68; */
  `,
  active: css`
    --button-color: #212529;
    --button-bg-color: #ffffff;
    --button-border: 2px solid #000000;
    /* --button-hover-bg-color: #6E6A68; */
  `
};

function Button({ disabled, size, variant, children }) {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledButton
      disabled={disabled}
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}

  margin: 10px;
  border: var(--button-border, 2px solid #050505);
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  color: var(--button-color, #ffffff);
  background: var(--button-bg-color, #0d6efd);

  /* & is used to reference selector of the parent rule. */
  &:active,
  &:hover,
  &:focus {
    background: grey;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;

export default Button;
