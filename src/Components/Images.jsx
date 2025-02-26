import javaimg from '../assets/javascript.png';
import reactimg from '../assets/react.png';
import reduximg from '../assets/redux.png';
import vscodeimg from '../assets/vscode.png';
import nodeimg from '../assets/node.png';
import figmaimg from '../assets/figma2.png';

const imageList = [
  { src: javaimg, alt: 'JavaScript' },
  { src: reactimg, alt: 'React' },
  { src: reduximg, alt: 'Redux' },
  { src: vscodeimg, alt: 'VS Code' },
  { src: nodeimg, alt: 'Node.js' },
  { src: figmaimg, alt: 'Figma' }
];

const Images = () => {
  return (
    <div className="px-4 md:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 gap-6 md:gap-8 ">
        {imageList.map((image, index) => (
          <div key={index} className="flex items-center justify-center p-4">
            <img
              src={image.src}
              alt={image.alt}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
            />
            <span className="ml-4 text-sm sm:text-base font-bold text-black dark:text-white">
              {image.alt}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
