import React, { useReducer } from 'react';
import { ProfileContext } from './profile.context';

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PRIMARY_CARD':
      return {
        ...state,
        card: state.card.map((item) =>
          item.id === action.payload
            ? { ...item, type: 'primary' }
            : { ...item, type: 'secondary' }
        ),
      };
    default:
      return state;
  }
}

const initData = {
  card: [
    {
      id: '1',
      title: 'Card',
    },
    {
      id: '2',
      title: 'Paypal',
    },
    {
      id: '3',
      title: 'Amex',
    },
  ],
};

export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { ...initData });

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};
