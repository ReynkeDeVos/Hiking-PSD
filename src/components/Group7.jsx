import shadowImage from '../assets/Group07/07_shadow.png';

const Group7 = () => {
  return (
    <div className="flex-grow bg-white py-12">
      <div className="container relative mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          <div>
            <div
              className="absolute bottom-0 right-0 bg-no-repeat opacity-90"
              style={{
                backgroundImage: `url(${shadowImage})`,
                width: '300px',
                height: '300px',
              }}></div>
            <h3 className="text-2xl font-semibold text-orange-500">Lorem Ipsum</h3>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, talon onne ullamco laboris nisi ut aliquipore.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-orange-500">Lorem Ipsum</h3>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, talon onne ullamco laboris nisi ut aliquipore.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-orange-500">Lorem Ipsum</h3>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, talon onne ullamco laboris nisi ut aliquipore.
            </p>
          </div>
        </div>
        <div className="mb-4 text-2xl italic text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis
          <p className="text-xxl font-semibold text-gray-700">&quot;Lorem Ipsum&quot;</p>
        </div>
      </div>
    </div>
  );
};

export default Group7;
