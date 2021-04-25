import styled from "styled-components";

export const Label = styled.label<{ disabled?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 4px 0;
  padding-left: 40px;
  min-height: 24px;

  cursor: pointer;
  user-select: none;

  ${(props) =>
    props.disabled &&
    `
    opacity: 0.7;
  `};
`;

export const Checkmark = styled.span<{ checked?: boolean }>`
  position: absolute;
  height: 24px;
  left: 0;
  top: 0;
  width: 24px;

  background-color: #f8c25c;
  border-radius: 12px;

  ${(props) => {
    if (props.checked) {
      return `
        :after {
          position: absolute;
          display: block;
          height: 12px;
          left: 6px;
          top: 6px;
          width: 12px;

          background-color: black;
          border-radius: 6px;
          content: "";
        }
      `;
    }
  }}
`;

export const RadioInput = styled.input.attrs({
  type: "radio",
})`
  position: absolute;
  height: 0;
  opacity: 0;
  width: 0;

  cursor: pointer;
`;
