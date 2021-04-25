import React, { useEffect, useRef, useState } from "react";

import {
  Container,
  Form,
  Options,
  Input,
  Button,
  Result,
  Title,
} from "./App.styles";
import Radio from "./components/ui/Radio";
import { RomanNumerals } from "./helpers/romanNumerals";

type convertingType = "iToR" | "rToI";

const App: React.FC = () => {
  const [converter, setConverter] = useState<convertingType>("iToR");
  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [hasError, setError] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const handleCoverterChange = (option: convertingType) => {
    setValue("");
    setResult("");
    setConverter(option);
  };

  const handleConvert = () => {
    const result =
      converter === "iToR"
        ? RomanNumerals.toRoman(Number(value))
        : RomanNumerals.fromRoman(value);

    if (!result) {
      setError(true);
    } else {
      setResult(String(result));
      setError(false);
    }
  };

  return (
    <Container>
      <Form>
        <Title>Roman numerals converter</Title>
        <Options>
          <Radio
            label={"Integer to Roman"}
            name="converter"
            value="iToR"
            checked={converter === "iToR"}
            onChange={(value) => handleCoverterChange(value as convertingType)}
          />
          <Radio
            label={"Roman to Integer"}
            name="converter"
            value="rToI"
            checked={converter === "rToI"}
            onChange={(value) => handleCoverterChange(value as convertingType)}
          />
        </Options>
        <Input
          ref={inputRef}
          name="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={
            converter === "iToR"
              ? "Enter a number, e.g. 1990"
              : "Enter a Roman number, e.g. MMVIII"
          }
        />
        <Button onClick={handleConvert}>Convert</Button>
        <Result error={hasError}>
          {hasError ? "Number is invalid or out of range." : result}
        </Result>
      </Form>
    </Container>
  );
};

export default App;
