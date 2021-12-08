import Title from './Title/Title';
import SlideImage from '../Slide/SlideImage/SlideImage';

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
