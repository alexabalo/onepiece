import React from 'react'
import fruta1 from './assets/img/fuego.png'
import fruta2 from './assets/img/goma.png';
import logo from './assets/img/logo.png';
import { useNavigate } from 'react-router-dom';


const Portada = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate ('/welcome');
    }
    return (
    <>
        <div className='min-h-screen bg-primary flex flex-col'>
            <div className='w-screen h-auto bg-secondary rounded-bl-[170px] rounded-br-[170px] flex flex-col items-center'>
                <img src={logo} alt="Logo" className='w-28 mt-4' />
                <div className='flex items-center relative top-[40px]'>
                    <img src={fruta1} alt="fruta1" className='w-36 -mr-16 rotate-[-16.11deg]' />
                    <img src={fruta2} alt="fruta2" className='w-44 rotate-[21.57deg]' />
                </div>
                <div className='text-center text-[#edc18d] font-[bangers] text-[40px] my-9 '>busca frutas</div>
            </div>

            <div className='flex justify-center items-center mt-12'>
                <div className=' w-36 h-14 bg-[#322c54] rounded-[25px] flex items-center justify-center hover:bg-[#453b70] transition duration-100 my-10'>
                    <div className='text-center text-xl text-[#edc18d] font-[bangers]' onClick={handleStart}>Comenzar</div>
                </div>
            </div>
        </div>
        </>
    )
   
}
export default Portada;
