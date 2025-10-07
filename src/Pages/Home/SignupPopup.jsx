import { motion } from "framer-motion";


const SignupPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl w-[90%] max-w-md text-center"
      >
        <button onClick={onClose} className="absolute top-4 right-6 text-2xl font-bold text-gray-500">
          ×
        </button>

        <h2 className="text-lg mb-6 text-gray-800 font-medium">
          Are you joining as a <br />
          <span className="font-semibold text-yellow-600">HOST/EVENT PLANNER</span> or{" "}
          <span className="font-semibold text-yellow-600">MERCHANT</span>?
        </h2>

        <div className="flex flex-col gap-4">
          <button className="bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
            Merchant
          </button>
          <button className="border border-yellow-400 text-yellow-600 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition">
            Host/Event Planner
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default SignupPopup
