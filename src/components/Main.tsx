import keyboardImg from '../assets/keyboard-img.jpg';
import {useNavigate } from 'react-router-dom';
const Main = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col">

      <div className="main-container flex flex-col h-full sm:h-[600px] sm:flex-row">
        <div className="img-container w-full h-full md:w-3/4">
          <img src={keyboardImg} alt="keyboard-img" className="w-full h-full" />
        </div>
        <div className="hero-section flex flex-col justify-center items-start min-h-max w-full space-y-8 p-8 bg-backHero text-whiteLight ">
          <h1 className="text-4xl w-full sm:w-3/4 lg:w-5/12 leading-tight font-extrabold">
            Gaming Laptops Services
          </h1>
          <p className="w-full text-lg lg:w-3/5">
            Suspendisse potenti. Donec sed mi lorem. Quisque euismod, tortor non
            commodo malesuada, ante nibh posuere mauris, vitae bibendum augue
            ipsum sed tortor. Quisque sit amet est ac turpis malesuada
            fermentum.
          </p>
          <button onClick={()=>navigate('/shop')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            Shop Page
          </button>
        </div>
      </div>

      <div className="content-container text-center p-10 text-blackLight space-y-20 bg-backImg">
        <div className="flex flex-col  items-center gap-6">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <hr className="p-1 w-36 bg-blackLight rounded-md" />
          <p className="sm:text-left text-center w-3/4">
            Seitan man braid microdosing roof party wolf semiotics lomo lorem
            authentic health goth pickled heirloom irony four dollar toast
            shoreditch. Vice knausgaard echo park microdosing jianbing
            asymmetrical speed test toast noo.
          </p>
        </div>

        <div className="card-container grid gap-20 justify-items-center justify-center">
          <div className="space-y-8 min-w-[220px] bg-white px-6 py-16 shadow-2xl rounded-lg">
            <h3 className="font-bold text-2xl">Laptop Maintenance</h3>
            <p>Narw tbh flannel. Hot lorem gochujangtogen.</p>
          </div>
          <div className="space-y-8 min-w-[220px] bg-white px-6 py-16 shadow-2xl rounded-lg">
            <h3 className="font-bold text-2xl">Breakthrough Tech</h3>
            <p>Narw tbh flannel. Hot lorem gochujangtogen.</p>
          </div>
          <div className="space-y-8 min-w-[220px] bg-white px-6 py-16 shadow-2xl rounded-lg">
            <h3 className="font-bold text-2xl">Aesthetic Design</h3>
            <p>Narw tbh flannel. Hot lorem gochujangtogen.</p>
          </div>
        </div>

        <div>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Show All Services
          </button>
        </div>
      </div>

      <div className="testimonies content-container p-10 space-y-20 bg-backHero">

        <div className="flex flex-col items-center gap-4 text-whiteLight">
          <h1 className="text-4xl sm:text-6xl font-bold min-w-max">What Clients Say</h1>
          <hr className="pt-1 sm:p-1 w-3/5 sm:w-1/5 bg-whiteLight rounded-md" />
        </div>

        <div className="card-container grid gap-20 justify-center text-blackLight">
          <div className="space-y-8 px-6 py-12 sm:py-24 shadow-2xl rounded-lg bg-white">
            <p>
              Mustache flexitarian prism sriracha enamel pin offal meh shabby
              chic four loko meggings subway tile portland pickled narwhal ennui
              truffaut neutra shaman.
            </p>
          </div>
          <div className="space-y-8 px-6 py-12 sm:py-24 shadow-2xl rounded-lg bg-white">
            <p>
              Mustache flexitarian prism sriracha enamel pin offal meh shabby
              chic four loko meggings subway tile portland pickled narwhal ennui
              truffaut neutra shaman.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Main;
