import Title from './Title';
import SlideImage from './SlideImage';
// import SlideNumber from './SlideNumber';

function Slide(props) {
  const { userData } = props;

  return (
    <div className="slide">
      <Title />
      <SlideImage userData={userData} />
    </div>
  );
}

export default Slide;
