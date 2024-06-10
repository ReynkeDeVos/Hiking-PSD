import image1 from '../assets/Group03/03_01.png';
import image2 from '../assets/Group04/04_01.png';

const Group3_4 = () => {
  return (
    <div className="font-white text-left font-OpenSans text-white">
      <div
        className="flex items-center"
        style={{
          backgroundColor: '#7f7770',
        }}>
        <img src={image1} className="mr-4 w-1/2" />
        <aside
          className=""
          style={{
            backgroundColor: '#7f7770',
          }}>
          <h1 className="mb-10 font-bold">Discount up to 50% All Excursions</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti ex sit aut laboriosam
            quasi alias sint magnam a nam, dolor et quia deserunt ut optio ea perferendis facilis delectus.
          </p>
          <div className="my-10 ml-4 flex">
            <button className="h-12 w-56 rounded-full bg-[#f9a826] px-4 py-2 text-center font-OpenSans text-xl font-extrabold text-[#ffffff] opacity-90 focus:border-2 focus:outline-none">
              READ MORE
            </button>
          </div>
        </aside>
      </div>
      <div
        className="flex items-center"
        style={{
          backgroundColor: '#deb37e',
        }}>
        <aside className="mg-l ml-7 mr-4 w-1/2 rounded-3xl">
          <h1 className="mb-10 font-bold">
            Januarys&apos; Promo: <br />
            Buy 1 Get 1 Free!
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores architecto voluptatum non aperiam
            esse,g tenetur molestiae saepe harum suscipit excepturi provident mollitia, accusantium id veritatis laborum
            dolorem ducimus at! Natus!
          </p>
          <div className="my-10 ml-4 flex">
            <button className="h-12 w-56 rounded-full bg-[#f9a826] px-4 py-2 text-center font-OpenSans text-xl font-extrabold text-[#ffffff] opacity-90 focus:border-2 focus:outline-none">
              READ MORE
            </button>
          </div>
        </aside>
        <img src={image2} className="w-1/2" />
      </div>
    </div>
  );
};

export default Group3_4;
