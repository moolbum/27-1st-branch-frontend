import './SlideNumber.scss';

function SlideNumber({ userData, setSlideSize }) {
  const userData2 = [...userData];

  if (userData2.length > 10) {
    userData2.splice(10, userData2.length);
  }

  return (
    <ul className="slideNumber">
      {userData2.map(data => {
        return (
          <li
            className="slideNumberIndex"
            key={data.id}
            onClick={() => {
              setSlideSize(data.id - 1);
            }}
          >
            {data.id}
          </li>
        );
      })}
    </ul>
  );
}

export default SlideNumber;
