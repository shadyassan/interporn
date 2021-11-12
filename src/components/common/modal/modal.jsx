import React, { useRef, useEffect } from 'react';
import Portal from '@reach/portal';
import { motion, AnimatePresence } from 'framer-motion';

import { ModalWrapper } from './modal.style';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import CloseIcon from 'components/icons/CloseIcon';

import { fadeInOut } from 'utils/motion/fade-in-out';
import { zoomOutIn } from 'utils/motion/zoom-out-in';
import { useUI } from 'contexts/ui.context';
import useOnClickOutside from 'utils/use-on-click-outside';

const Modal = ({ children, open, onClose }) => {
  const { closeModal } = useUI();
  const modalRootRef = useRef();
  const modalInnerRef = useRef();
  useOnClickOutside(modalInnerRef, () => closeModal());

  useEffect(() => {
    if (modalInnerRef.current) {
      if (open) {
        disableBodyScroll(modalInnerRef.current);
        document.body.classList.add('modal-open');
      } else {
        enableBodyScroll(modalInnerRef.current);
        document.body.classList.remove('modal-open');
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [open]);

  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <ModalWrapper>
            <motion.div
              ref={modalRootRef}
              key="modal"
              initial="from"
              animate="to"
              exit="from"
              variants={fadeInOut(0.25)}
              className="modal-root">
              <button
                className="modal-close"
                onClick={onClose}
                aria-label="Close panel">
                <CloseIcon />
              </button>
              <motion.div
                initial="from"
                animate="to"
                exit="from"
                variants={zoomOutIn()}
                className="modal-motion">
                <div className="modal-full">
                  <div ref={modalInnerRef} className="modal-overflow">
                    {children}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </ModalWrapper>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default Modal;
