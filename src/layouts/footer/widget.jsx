const Widget = ({ children, title }) => {
  return (
    <div className="widget-wrapper">
      {title && <h6 className="widget-title">{title}</h6>}
      {children}
    </div>
  );
};

export default Widget;
