import { react } from 'react';

const Group5 = () => {
  return (
    <>
      <div className="group5-bg relative w-full " style={{
        width: '100%',
        height: '765px',
        opacity: 0.8,
        position: 'relative',
        backgroundColor: '#7f7770'
        
      }}>

      <div className="before mt-40 bg-cover bg-no-repeat" style={{
        content: "",
        width: "100%",
        height: "15%",
        backgroundImage: "url(../src/assets/Group05/tornpaper_at_the_top.png)"
      }}></div>
      <div className="before bg-cover bg-no-repeat w-[100%] h-[15%]" style={{
        content: "",
        marginTop: "600px",
        backgroundImage: "url(../src/assets/Group05/tornpaper_at_the_bottom.png)"
      }}></div>
      <div className="relative h-[40%] w-[40%] before bg-cover transform scaleX-[-1]" style={{
        bottom: "600px",
        backgroundImage: "url(../src/assets/Group05/leaf_shadow.png)"
      }}></div>
      

    </div>
    </>
  )
}

export default Group5;