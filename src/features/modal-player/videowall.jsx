import React from 'react';
import { motion } from 'framer-motion';
import { fadeInOut } from 'utils/motion/fade-in-out';
import { useUI } from 'contexts/ui.context';
import { fetchClip } from '@framework/games/games.query';
import InfoWall from './infowall';
import ImageWrapper from 'components/image-wrapper/image-wrapper';

import {
  EndScreen,
  EndScreenContent,
  ChoiceQuestion,
  ChoicesItems,
  ChoiceItem,
  ChoiceInfo,
  ChoiceTitle,
  ChoiceDescription,
} from './player.style';

const VideoWall = ({ title }) => {
  const {
    active_game,
    isAuthenticated,
    choice,
    setActiveClip,
    setEndedClip,
    closePlayer,
  } = useUI();

  const { id } = active_game;

  if (!isAuthenticated || !choice.length) {
    return <InfoWall />;
  }

  const onClickHandler = async (e, item) => {
    e.preventDefault();

    try {
      const data = await fetchClip(id, item.id);
      setActiveClip(data);
      setEndedClip(false);
    } catch (e) {
      closePlayer();
    }
  };

  return (
    <motion.div initial="from" animate="to" exit="from" variants={fadeInOut()}>
      <EndScreen>
        <EndScreenContent>
          <ChoiceQuestion>{title}</ChoiceQuestion>
          <ChoicesItems>
            {choice.map((item, idx) => (
              <motion.div
                initial="from"
                animate="to"
                key={item.id}
                exit="from"
                variants={fadeInOut()}>
                <ChoiceItem
                  index={idx}
                  onClick={(e) => onClickHandler(e, item)}>
                  <ImageWrapper
                    name={item.title}
                    src={item.featured_image}
                    width={300}
                    height={360}
                  />
                  <ChoiceInfo>
                    <ChoiceTitle>{item.title}</ChoiceTitle>
                    {item.description && (
                      <ChoiceDescription
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}
                      />
                    )}
                  </ChoiceInfo>
                </ChoiceItem>
              </motion.div>
            ))}
          </ChoicesItems>
        </EndScreenContent>
      </EndScreen>
    </motion.div>
  );
};

export default VideoWall;
