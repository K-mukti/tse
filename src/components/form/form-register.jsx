import logoGoogle from '../../assets/logos/logos_google-icon.png';
import hidePass from '../../assets/form/mdi_eye-off.png';



const FormRegister = () => {
    return (

        <div className="flex items-center justify-center w-full">
            <div className='flex flex-col bg-white border-form p-9 rounded-[4px] shadow-lg w-[590px] gap-9'>
            <form action="" method="post" className="space-y-4">
                <div className='flex flex-col gap-[10px]'>
                    <h3 className="text-center">Pendaftaran Akun</h3>
                    <p className="text-center text-input">Yuk, daftarkan akunmu sekarang juga!</p>
                </div>
                <div>
                    <label for="fullname" className="text-input">
                        <div className='flex gap-1'>
                        Nama Lengkap
                        <p className='text-red-600'>*</p>
                    </div>
                        </label>
                    <input type="text" name="fullname" className='input-form' id="fullname"/>
                </div>
                <div>
                    <label for="email" className="text-input">
                    <div className='flex gap-1'>
                        E-Mail
                    <p className='text-red-600'>*</p>
                    </div>
                    </label>
                    <input type="email" name="email" className='input-form' id="email" />                    
                </div>
                <div>
                    <label for="phone" className="textinput">
                    <div className='flex gap-1'>
                        No.Hp
                    <p className='text-red-600'>*</p>
                    </div>
                    </label>
                    <div className="flex gap-6">
                        <select name="country" id="country">
                            <option value="indonesia">
                                    +62  
                                </option>
                            <option value="singapore">
                                    +65
                            </option>
                            <option value="malaysia">
                                    +60
                            </option>
                        </select>
                        <input type="tel" name="phone" className='input-form' id="phone" />                    
                    </div>
                </div>
                <div className='relative'>
                        <label htmlFor="password" className="text-input">
                        <div className='flex gap-1'>
                            Kata Sandi
                        <p className='text-red-600'>*</p>
                    </div>
                        </label>
                        <input type="password" name="password" id="password" className="input-form pr-10"/>
                        <img src={hidePass} alt="hide-password" className="absolute right-3 hp:top-7 lg:top-9 cursor-pointer" />
                    </div>
                <div className="relative">
                    <label for="confirm_password" className="text-input">
                        <div className='flex gap-1'>
                        Konfirmasi Kata Sandi
                        <p className='text-red-600'>*</p>
                    </div>
                        </label>
                    <input type="password" name="confirm_password" id="confirm_password" className="input-form pr-10"/>
                    <img src={hidePass} alt="hide-password" className="absolute right-3 hp:top-7 lg:top-9 cursor-pointer" />
                </div>

                <div className="w-full text-right">
                        <a href="#" className="text-home">Lupa Password?</a>
                </div>

                <button className ="btn-register text-button">Daftar</button>
                <button className ="btn-login text-button">Masuk</button>

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

    )
}

export default FormRegister;