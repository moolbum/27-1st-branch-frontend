function Scroll() {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <span
      className="topButton"
      onClick={handleTop}
      style={window.scrollY < 260 ? { display: 'none' } : null}
    >
      <span className="topButtonText">
        Top
        <img
          className="topButtonImg"
          src="./images/Main/iconmonstr-arrow-right-thin.svg"
          alt="TopButton"
        />
      </span>
    </span>
  );
}

export default Scroll;
