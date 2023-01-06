import Image
 from "next/image";
const Footer = () => {
  return(
    <div className="h-screen flex items-center justify-start p-10 bg-gradient-to-br from-[#5f5878] to-[#12121c] text-white gap-52">
      <div className="p-10">
        <div>
          {/* <Image 
            src="/public/images/logoITS.png"
            alt="logo its"
            width={500}
            height={500}
          /> */}
        </div>
        <p>
          ©2022 Barunastra ITS <br />
          Website by Barunastra ITS
        </p>
      </div>
      <div className="bg-gray-100 bg-opacity-5 py-5 pl-5 pr-7 rounded-3xl border border-black items-center">
        <div className="mb-5">
          <h2 className="mb-3">Our Address</h2>
          <p>
            Sekretariat Robotika ITS, Pusat Robotika ITS, Jl. <br />
            Teknik Kimia, Kampus ITS Sukolilo, Surabaya, 60111
          </p>
        </div>
        <div>
          <h2 className="mb-3">Our Contact</h2>
          <p>
            Mobile: +62 895805263010 <br />
            Email: barunastra.its@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer