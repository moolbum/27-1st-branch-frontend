import Title from './Title/Title';
import SlideImage from '../Slide/SlideImage/SlideImage';

function Slide({ userData, ditailList }) {
  return (
    <div className="slide">
      <Title />
      <SlideImage ditailList={ditailList} userData={userData} />
    </div>
  );
}

export default Slide;
