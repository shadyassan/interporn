import { useRef } from 'react';
import CountUp from 'react-countup';
import Loader from 'components/loader/loader';
import { useCountersQuery } from '@framework/counter/get-all-counters';
import { CountUpWrapper, CountUpItem } from './count-up.style';
import { useOnScreen } from 'utils/use-on-screen';

const CountUpContainer = ({ columns = 4 }) => {
  const { data, isLoading } = useCountersQuery();
  const el = useRef();
  // const tRef = useOnScreen(el);

  return (
    <CountUpWrapper ref={el} columns={columns}>
      {isLoading ? (
        <Loader />
      ) : (
        data?.length > 0 &&
        data.map(({ id, name, value }) => {
          return (
            <CountUpItem key={id}>
              <CountUp start={0} end={value} delay={0} duration={3}>
                {({ countUpRef }) => (
                  <div className="counter-container">
                    <h6 className="counter-name">{name}</h6>
                    <span className="counter-value" ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </CountUpItem>
          );
        })
      )}
    </CountUpWrapper>
  );
};

export default CountUpContainer;
