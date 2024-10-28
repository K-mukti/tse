import { useEffect } from "react";
import { NavHome } from '../components/nav/index.jsx';  
import Banner from '../components/banner/index.jsx';
import { BannerCTA } from '../components/banner/index.jsx';
import Menu from '../components/menu/index.jsx';
import CardHolder from '../components/card/card-holder.jsx';
import Footer from '../components/footer/index.jsx';


const Home = () => {

    useEffect(() => {
        document.title = "Home - videobelajar"; //untuk judul tab browser
    },[]);

    return (
        <div className='container mx-auto'>
            <div className='flex flex-wrap'>
                <NavHome/> {/* Memanggil navbar yang diimport */}
                <div className='flex flex-col w-full hp:px-6 hp:py-28 hp:gap-6 lg:px-[120px] lg:py-28 lg:gap-[50px]'>
                    <Banner 
                    header="Revolusi Pembelajaran:Temukan Ilmu Baru melalui Platform Video Interaktif!"
                    desc="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
                    button="Temukan Video Course untuk Dipelajari!"
                    /> {/* Memanggil Banner yang diimport, tapi menggunakan props jadi perlu diisi propsnya */}
                    
                    <div className='flex flex-col gap-[10px]'>
                    <h3 className='hp:text-center'>Koleksi Video Pembelajaran Unggulan</h3> 
                    <p className='text-home hp:text-center'>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
                    </div>
                    <Menu/> {/* Memanggil Menu yang diimport */}

                    <CardHolder/> {/* Memanggil Card Holder yang diimport */}
                    <BannerCTA 
                        title="NEWSLETTER"
                        header="Mau Belajar Lebih Banyak?"
                        desc="Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id"
                    /> {/* Memanggil BannerCTA yang diimport, tapi menggunakan props jadi perlu diisi propsnya */}

                    <Footer/> {/* Memanggil Footer yang diimport */}
                    
                </div>
            </div>
        </div>
    )
}

export default Home;
