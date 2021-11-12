import React, { useState, useRef } from 'react';
import useOnClickOutside from 'utils/use-on-click-outside';
import cx from 'classnames';
import DropArrowIcon from 'components/icons/DropArrowIcon';
import PopoverWrapper from './popover.style';
import { motion } from 'framer-motion';
import { zoomInBottom } from 'utils/motion/zoom-in-bottom';

const Popover = ({ className, handler, content, direction }) => {
  const [state, setState] = useState(false);
  const ref = useRef();

  const handleToggle = (e) => {
    e.stopPropagation();
    setState((s) => !s);
  };

  useOnClickOutside(ref, () => setState(() => false));

  return (
    <PopoverWrapper
      className={cx('popover-wrapper', {
        [className]: className,
        [direction]: direction,
        ['active']: state,
      })}
      ref={ref}>
      <div className="popover-handler" onClick={handleToggle}>
        {handler}
        <span className="popover-drop-icon">
          <DropArrowIcon />
        </span>
      </div>
      {state && (
        <motion.div
          initial="from"
          animate="to"
          exit="from"
          variants={zoomInBottom()}>
          <div className="popover-content">
            {content && (
              <div className="inner-wrap" onClick={handleToggle}>
                {content}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </PopoverWrapper>
  );
};

export default Popover;
