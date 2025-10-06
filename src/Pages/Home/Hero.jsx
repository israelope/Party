import { h1 } from 'framer-motion/client';
import partyBg from '../../assets/img/party-bg.png';

export default function Hero() {
  return (
    <section
      className="h-screen bg-gradient-to-b from-blue-900/80 to-blue-700/60 flex flex-col items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${partyBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="uppercase tracking-widest text-sm mb-2">Make it rain with Party Currency!</h3>
      <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">
        What's the Generous Sum Coming Your Way?
      </h1>
    </section>
  );
}
