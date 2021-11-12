import { getToken } from 'framework/basic-rest/utils/get-token';
import { createContext, useReducer, useMemo, useContext } from 'react';

const defaultState = {
  isModalOpen: false,
  endedVideo: false,
  active_clip: null,
  active_game: null,
  choice: [],
  video: '',
  game_id: null,
};

const initialState = {
  isAuthenticated: getToken() ? true : false,
  displaySidebar: false,
  displayModal: false,
  displaySearch: false,
  modalView: 'SIGNIN_VIEW',
  drawerView: null,
  toastText: '',
  searchTerm: '',

  ...defaultState,
};

export const UIContext = createContext(initialState);

UIContext.displayName = 'UIContext';

function uiReducer(state, action) {
  switch (action.type) {
    case 'SIGNIN':
      return {
        ...state,
        modalView: 'SIGNIN_VIEW',
      };
    case 'SIGNUP':
      return {
        ...state,
        modalView: 'SIGNUP_VIEW',
      };
    case 'FORGOTPASS':
      return {
        ...state,
        modalView: 'FORGOTPASS_VIEW',
      };
    case 'MOBILE_SEARCH':
      return {
        ...state,
        modalView: 'SEARCH_VIEW',
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isAuthenticated: false,
      };
    case 'OPEN_SIDEBAR': {
      return {
        ...state,
        displaySidebar: true,
      };
    }
    case 'CLOSE_SIDEBAR': {
      return {
        ...state,
        displaySidebar: false,
        drawerView: null,
      };
    }
    case 'OPEN_SEARCH': {
      return {
        ...state,
        displaySearch: true,
      };
    }
    case 'CLOSE_SEARCH': {
      return {
        ...state,
        displaySearch: false,
      };
    }
    case 'OPEN_MODAL': {
      return {
        ...state,
        displayModal: true,
        displaySidebar: false,
      };
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        displayModal: false,
      };
    }
    case 'SET_MODAL_VIEW': {
      return {
        ...state,
        modalView: action.view,
      };
    }
    case 'SET_MODAL_DATA': {
      return {
        ...state,
        modalData: action.data,
      };
    }
    case 'SET_DRAWER_VIEW': {
      return {
        ...state,
        drawerView: action.view,
      };
    }
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.search,
      };
    case 'SET_TOAST_TEXT': {
      return {
        ...state,
        toastText: action.text,
      };
    }
    case 'SET_ACTIVE_CLIP':
      const active_clip = action.payload;

      return {
        ...state,
        active_clip,
        video: active_clip.full_video,
        choice: active_clip?.choice ?? [],
      };
    case 'SET_ACTIVE_GAME':
      const game = action.payload;

      return {
        ...state,
        isModalOpen: true,
        game_id: game.id,
        active_game: game,
        active_clip: game?.clip ?? null,
        choice: game?.choice ?? [],
        video: game?.clip?.full_video ?? '',
      };
    case 'OPEN_VIDEO':
      return {
        ...state,
        isModalOpen: true,
      };
    case 'CLOSE_VIDEO':
      return {
        ...state,
        isModalOpen: false,
      };
    case 'SET_VIDEO':
      return {
        ...state,
        video: action.payload,
      };
    case 'SET_ENDED_CLIP':
      return {
        ...state,
        endedVideo: action.payload,
      };
    case 'CLOSE_MODAL_VIDEO_PLAYER':
      return {
        ...state,
        ...defaultState,
      };
  }
}

export const UIProvider = (props) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const authorize = () => dispatch({ type: 'SIGNIN_SUCCESS' });
  const unauthorize = () => dispatch({ type: 'SIGN_OUT' });

  const toggleSignInForm = () => dispatch({ type: 'SIGNIN' });
  const toggleSignUpForm = () => dispatch({ type: 'SIGNUP' });
  const toggleForgotPassForm = () => dispatch({ type: 'FORGOTPASS' });

  const openSidebar = () => dispatch({ type: 'OPEN_SIDEBAR' });
  const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' });
  const toggleSidebar = () =>
    state.displaySidebar
      ? dispatch({ type: 'CLOSE_SIDEBAR' })
      : dispatch({ type: 'OPEN_SIDEBAR' });

  const openModal = () => dispatch({ type: 'OPEN_MODAL' });
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });

  const openSearch = () => dispatch({ type: 'MOBILE_SEARCH' });

  const setModalView = (view) => dispatch({ type: 'SET_MODAL_VIEW', view });
  const setModalData = (data) => dispatch({ type: 'SET_MODAL_DATA', data });
  const setDrawerView = (view) => dispatch({ type: 'SET_DRAWER_VIEW', view });

  const setToastText = (text) => dispatch({ type: 'SET_TOAST_TEXT', text });

  const setSearchTerm = (search) =>
    dispatch({
      type: 'SET_SEARCH_TERM',
      search,
    });

  const setActiveGame = (payload) =>
    dispatch({
      type: 'SET_ACTIVE_GAME',
      payload,
    });

  const setActiveClip = (payload) =>
    dispatch({
      type: 'SET_ACTIVE_CLIP',
      payload,
    });

  const openVideo = () => {
    dispatch({
      type: 'OPEN_VIDEO',
    });
  };

  const closeVideo = () => {
    dispatch({
      type: 'CLOSE_VIDEO',
    });
  };

  const setVideo = (payload) => dispatch({ type: 'SET_VIDEO', payload });

  const closePlayer = () =>
    dispatch({
      type: 'CLOSE_MODAL_VIDEO_PLAYER',
    });

  const setEndedClip = (payload) =>
    dispatch({
      type: 'SET_ENDED_CLIP',
      payload,
    });

  const value = useMemo(
    () => ({
      ...state,
      authorize,
      unauthorize,
      toggleSignInForm,
      toggleSignUpForm,
      toggleForgotPassForm,
      openSidebar,
      closeSidebar,
      toggleSidebar,
      openModal,
      closeModal,
      openSearch,
      setModalView,
      setModalData,
      setDrawerView,
      setSearchTerm,
      setToastText,

      setActiveClip,
      setActiveGame,
      openVideo,
      closeVideo,
      setVideo,
      closePlayer,
      setEndedClip,
    }),
    [state]
  );

  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const ManagedUIContext = ({ children }) => (
  <UIProvider>{children}</UIProvider>
);
