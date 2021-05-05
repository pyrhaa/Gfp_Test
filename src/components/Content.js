import Fonts from './Fonts';

const Content = ({ text, size, title }) => {
  return (
    <>
      <Fonts text={text} size={size} sort='date' title={title} />
    </>
  );
};

export default Content;
