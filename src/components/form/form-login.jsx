import logoGoogle from '../../assets/logos/logos_google-icon.png';
import hidePass from '../../assets/form/mdi_eye-off.png'; //Icon untuk menutup kata sandi

const FormLogin = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className='flex flex-col bg-white border-form p-9 rounded-[4px] shadow-lg w-[590px] gap-9'>
                <div className='flex flex-col gap-[10px]'>
                    <h3 className='text-center'>Masuk ke Akun</h3>
                    <p className="text-center text-input">Yuk, lanjutin belajarmu di videobelajar</p>
                </div>
                <form action="" method="post" className="space-y-4">
                    <div>
                        <label htmlFor="email" className="text-input">
                            <div className='flex gap-1'>
                                E-Mail
                                <p className='text-red-600'>*</p>
                            </div>
                        </label>
                        <input type="email" name="email" id="email" className='input-form' />
                    </div>
                    <div className='relative'>
                        <label htmlFor="password" className="text-input">
                        <div className='flex gap-1'>
                            Kata Sandi
                            <p className='text-red-600'>*</p>
                        </div>
                        </label>
                        <input type="password" name="password" id="password" className="pr-10 input-form"/> 
                        <img src={hidePass} alt="hide-password" className="absolute right-3 hp:top-7 lg:top-9 cursor-pointer" />
                    </div>
                    
                    <div className="w-full text-right">
                        <a href="#" className="text-home">Lupa Password?</a>
                    </div>
                    
                    <button type='submit' className="btn-login text-button" onClick={() => (window.location.href = "/home")}>Masuk</button>
                    <button
        className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-all"
        onClick={() => (window.location.href = "/home")}
      >
        Masuk
      </button>
                    <button type='submit' className="btn-register text-button" onClick={() => (window.location.href = "/register")}>Daftar</button>
                    
                    <p className="text-input text-center">atau</p>
                    <button type='submit' className="btn-google">
                        <div className="flex justify-center gap-2 px-[26px] py-2">
                            <img src={logoGoogle} alt="logo-google" />
                            <p className="text-button text-slate-600">Masuk dengan Google</p>
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormLogin;
