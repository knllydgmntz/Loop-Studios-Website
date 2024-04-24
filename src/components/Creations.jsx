// Items Container 1
import imgItemDesktop1 from "../assets/images/desktop/image-deep-earth.jpg";
import imgItemMobile1 from "../assets/images/mobile/image-deep-earth.jpg";
import imgItemDesktop2 from "../assets/images/desktop/image-night-arcade.jpg";
import imgItemMobile2 from "../assets/images/mobile/image-night-arcade.jpg";
import imgItemDesktop3 from "../assets/images/desktop/image-soccer-team.jpg";
import imgItemMobile3 from "../assets/images/mobile/image-soccer-team.jpg";
import imgItemDesktop4 from "../assets/images/desktop/image-grid.jpg";
import imgItemMobile4 from "../assets/images/mobile/image-grid.jpg";

// Items Container 2

import imgItem2Desktop1 from "../assets/images/desktop/image-from-above.jpg";
import imgItem2Mobile1 from "../assets/images/mobile/image-from-above.jpg";
import imgItem2Desktop2 from "../assets/images/desktop/image-pocket-borealis.jpg";
import imgItem2Mobile2 from "../assets/images/mobile/image-pocket-borealis.jpg";
import imgItem2Desktop3 from "../assets/images/desktop/image-curiosity.jpg";
import imgItem2Mobile3 from "../assets/images/mobile/image-curiosity.jpg";
import imgItem2Desktop4 from "../assets/images/desktop/image-fisheye.jpg";
import imgItem2Mobile4 from "../assets/images/mobile/image-fisheye.jpg";

const Creations = () => {
  return (
    <section id="creations">
      {/* Creations Container */}
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        {/* Creations Header */}
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Our Creations
          </h2>

          {/* Button */}
          <button className="hidden btn md:block">See all</button>
        </div>

        {/* Items Container */}
        <div className="item-container">
          {/* Item 1 */}
          <div className="group item">
            {/* Desktop Image */}
            <img
              className="hidden w-full duration-200 md:block group-hover:scale-110"
              src={imgItemDesktop1}
              alt="Earth image Desktop"
            />
            {/* Mobile Image */}
            <img
              className="w-full md:hidden"
              src={imgItemMobile1}
              alt="Earth image Mobile"
            />
            {/* Item Gradient */}
            <div className="item-gradient"></div>
            {/* Item Text */}
            <h5>Deep Earth</h5>
          </div>

          {/* Item 2 */}
          <div className="group item">
            {/* Desktop Image */}
            <img
              className="hidden w-full duration-200 md:block group-hover:scale-110"
              src={imgItemDesktop2}
              alt="Night Arcade Desktop"
            />
            {/* Mobile Image */}
            <img
              className="w-full md:hidden"
              src={imgItemMobile2}
              alt="Night Arcade Mobile"
            />
            {/* Item Gradient */}
            <div className="item-gradient"></div>
            {/* Item Text */}
            <h5>Night Arcade</h5>
          </div>

          {/* Item 3 */}
          <div className="group item">
            {/* Desktop Image */}
            <img
              className="hidden w-full duration-200 md:block group-hover:scale-110"
              src={imgItemDesktop3}
              alt="Soccer Team"
            />
            {/* Mobile Image */}
            <img
              className="w-full md:hidden"
              src={imgItemMobile3}
              alt="Soccer Team"
            />
            {/* Item Gradient */}
            <div className="item-gradient"></div>
            {/* Item Text */}
            <h5>Soccer Team VR</h5>
          </div>

          {/* Item 4 */}
          <div className="group item">
            {/* Desktop Image */}
            <img
              className="hidden w-full duration-200 md:block group-hover:scale-110"
              src={imgItemDesktop4}
              alt="The Grid Desktop"
            />
            {/* Mobile Image */}
            <img
              className="w-full md:hidden"
              src={imgItemMobile4}
              alt="The Grid Mobile"
            />
            {/* Item Gradient */}
            <div className="item-gradient"></div>
            {/* Item Text */}
            <h5>The Grid</h5>
          </div>
        </div>

        {/* Items Container 2*/}
        <div className="item-container mt-10">
          {/* Item 1 */}
          <div className="group item">
            {/* Desktop Image */}
            <img
              className="hidden w-full duration-200 md:block group-hover:scale-110"
              src={imgItem2Desktop1}
              alt="From up above vr Desktop"
            />
            {/* Mobile Image */}
            <img
              className="w-full md:hidden"
              src={imgItem2Mobile1}
              alt="From up above vr Mobile"
            />
            {/* Item Gradient */}
            <div className="item-gradient"></div>
            {/* Item Text */}
            <h5>From Up Above VR</h5>
          </div>

          {/* Item 2 */}
          <div className="group item">
            {/* Desktop Image */}
            <img
              className="hidden w-full duration-200 md:block group-hover:scale-110"
              src={imgItem2Desktop2}
              alt="Night Arcade Desktop"
            />
            {/* Mobile Image */}
            <img
              className="w-full md:hidden"
              src={imgItem2Mobile2}
              alt="Night Arcade Mobile"
            />
            {/* Item Gradient */}
            <div className="item-gradient"></div>
            {/* Item Text */}
            <h5>Pocket Borealis</h5>
          </div>

          {/* Item 3 */}
          <div className="group item">
            {/* Desktop Image */}
            <img
              className="hidden w-full duration-200 md:block group-hover:scale-110"
              src={imgItem2Desktop3}
              alt="The Curiosity Desktop"
            />
            {/* Mobile Image */}
            <img
              className="w-full md:hidden"
              src={imgItem2Mobile3}
              alt="The Curiosity Mobile"
            />
            {/* Item Gradient */}
            <div className="item-gradient"></div>
            {/* Item Text */}
            <h5>The Curiosity</h5>
          </div>

          {/* Item 4 */}
          <div className="group item">
            {/* Desktop Image */}
            <img
              className="hidden w-full duration-200 md:block group-hover:scale-110"
              src={imgItem2Desktop4}
              alt="Fisheye Desktop"
            />
            {/* Mobile Image */}
            <img
              className="w-full md:hidden"
              src={imgItem2Mobile4}
              alt="Fisheye Mobile"
            />
            {/* Item Gradient */}
            <div className="item-gradient"></div>
            {/* Item Text */}
            <h5>Make it Fisheye</h5>
          </div>
        </div>

        {/* Bottom Button Container */}

        <div className="flex justify-center mt-10 md:hidden">
          <button className="btn w-full md:hidden">See All</button>
        </div>
      </div>
    </section>
  );
};

export default Creations;
