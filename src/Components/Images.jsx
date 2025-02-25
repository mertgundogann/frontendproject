import javaimg from '../assets/javascript.png';
import reactimg from '../assets/react2.png';
import reduximg from '../assets/redux.png';
import vscodeimg from '../assets/vscode.png';
import nodeimg from '../assets/node.png';
import figmaimg from '../assets/figma.png';

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
    <div className="px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:ml-20">
        {imageList.map((image, index) => (
          <div
            key={index}
            className="flex flex-row items-center p-4 rounded-lg bg-white shadow-md"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
            />
            <span className="ml-4 text-sm sm:text-base font-bold text-black">
              {image.alt}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
