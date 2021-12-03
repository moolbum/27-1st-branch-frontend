import Title from './Title';
import SlideImage from './SlideImage';

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
