import backgroundImage from '../assets/Group06/06_01.png';

const Group6 = () => {
  return (
    <div
      className="relative flex h-96 flex-col items-end justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 pr-8 text-right">
        <h1 className="text-5xl font-extrabold text-orange-400 drop-shadow-md">EXPLORE</h1>
        <h2 className="mt-2 text-5xl font-extrabold text-gray-600 drop-shadow-md">THE WORLD</h2>
      </div>
    </div>
  );
};

export default Group6;
