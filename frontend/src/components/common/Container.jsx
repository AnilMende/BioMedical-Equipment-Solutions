

const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;