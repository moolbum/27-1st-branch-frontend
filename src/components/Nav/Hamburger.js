import TopContainer from './hamberburgerTop/TopContainer';
import TopLoginContainer from './hamberburgerTop/TopLoginContainer';
import BottomContainer from './hamberburgerTop/BottomContainer';
import BottomLoginContainer from './hamberburgerTop/BottomLoginContainer';
import './Hamburger.scss';

function Hamburger({ openHamburger, hamburgerToggle }) {
  const loginToken = !!localStorage.getItem('TOKEN');

  return (
    <section
      className="hamburger"
      style={
        hamburgerToggle
          ? {
              visibility: 'visible',
              left: '0px',
              transition: 'all 0.3s',
            }
          : {
              visibility: 'hidden',
              left: '-260px',
              transition: 'all 0.3s',
            }
      }
    >
      <div className="hamburgerLeftContainer">
        {loginToken ? <TopLoginContainer /> : <TopContainer />}
        {loginToken ? <BottomLoginContainer /> : <BottomContainer />}
      </div>
      <div className="dim" onClick={openHamburger} />
    </section>
  );
}

export default Hamburger;
