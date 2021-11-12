import styled from 'styled-components';

const RadioGroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const RadioGroup = ({ data = [], component, containerClassName = '' }) => {
  return (
    <RadioGroupWrapper className={`radioGroup ${containerClassName}`.trim()}>
      {data.map((item, index) => component && component(item, index))}
    </RadioGroupWrapper>
  );
};

export default RadioGroup;
