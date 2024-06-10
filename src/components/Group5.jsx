import shadowImage from '../assets/Group02/02_shadow.png';

const Group5 = () => {
  return (
    <>
      <div
        className="group5-bg relative w-full"
        style={{
          marginBottom: '200px',
          width: '100%',
          height: '765px',
          opacity: 0.8,
          position: 'relative',
          backgroundColor: '#7f7770',
        }}>
        <div
          className="before mt-40 bg-cover bg-no-repeat"
          style={{
            content: '',
            width: '100%',
            height: '15%',
            backgroundImage: 'url(../src/assets/Group05/tornpaper_at_the_top.png)',
          }}></div>
        <h1 className="mt-10 font-bold text-white">Discount up to 50% All Excursions</h1>
        <p className="font-bold text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti ex sit aut laboriosam quasi
          alias sint magnam a nam, dolor et quia deserunt ut optio ea perferendis facilis delectus.
        </p>
        <div
          className="before h-[15%] w-[100%] bg-cover bg-no-repeat"
          style={{
            content: '',
            marginTop: '600px',
            backgroundImage: 'url(../src/assets/Group05/tornpaper_at_the_bottom.png)',
          }}></div>
        <img
          src={shadowImage}
          alt="Shadow"
          className="absolute bottom-20 left-10 h-1/2 w-1/2 -translate-x-1/10 scale-x-[-1] transform opacity-50"
        />
      </div>
    </>
  );
};

export default Group5;
