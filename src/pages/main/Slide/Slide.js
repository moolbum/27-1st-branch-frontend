import Title from './Title';
import SlideImage from './SlideImage';
import SlideNumber from './SlideNumber';

function Slide(props) {
  const { userData } = props;

  return (
    <div className="Slide">
      <Title />
      <SlideImage userData={userData} />
      <SlideNumber />
    </div>
  );
}

export default Slide;
