import { GlobalStyle } from "./GlobalStyle";
import { Filter } from "./Filter/Filter";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Filter
        isOpen
        options={[
          { value: "xs", label: "очень маленький" },
          { value: "sm", label: "маленький" },
          { value: "md", label: "средний" },
          { value: "lg", label: "большой" },
          { value: "xl", label: "очень большой" },
        ]}
      />
    </>
  );
};
