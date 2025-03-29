import Accordian from "./components/accordian";
import Indogo from "./components/accordian/index1";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import XRandomColor from "./components/randomColor/XRandomColor";
import Star from "./components/star-rating/Star";

function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <Indogo /> */}
      {/* <XRandomColor /> */}
      {/* <Star /> */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </>
  );
}

export default App;
