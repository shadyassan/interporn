import { NotFoundWrap } from './not-found.style.jsx';

const NotFound = ({ columns, title }) => (
  <NotFoundWrap columns={columns}>{title}</NotFoundWrap>
);

export default NotFound;
