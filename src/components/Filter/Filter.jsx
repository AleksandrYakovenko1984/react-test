import {
  Container,
  Options,
  Option,
  PopoverContainer,
  TriggerButton,
} from "./Filter.styled";
import { FaChevronDown } from "react-icons/fa";

export const Filter = ({ isOpen = false, options }) => {
  return (
    <Container>
      <TriggerButton type="button">
        ВЫБРАНО: 0 <FaChevronDown />{" "}
      </TriggerButton>
      {isOpen && (
        <PopoverContainer>
          <Options>
            {" "}
            {options.map(({ value, label }) => (
              <Option key={value}>
                <input type="checkbox" name="option" value={value} /> {label}
              </Option>
            ))}{" "}
          </Options>
        </PopoverContainer>
      )}
    </Container>
  );
};
