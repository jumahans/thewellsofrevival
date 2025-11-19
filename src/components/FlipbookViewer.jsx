// components/FlipbookViewer.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-use-swipeable";

export default function FlipbookViewer({ images, index, onClose }) {
  const goNext = () => index.set((prev) => (prev + 1) % images.length);
  const goPrev = () =>
    index.set((prev) => (prev - 1 + images.length) % images.length);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goNext,
    onSwipedRight: goPrev,
    trackMouse: true,
  });

  return (
    <AnimatePresence>
      {index.get() !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-5xl hover:text-gray-300 z-50"
          >
            ×
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-gray-300 z-50"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-gray-300 z-50"
          >
            ›
          </button>

          {/* Flip Animation Container */}
          <div className="relative w-full h-full flex items-center justify-center" {...swipeHandlers}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={index.get()}
                src={images[index.get()]}
                alt="Gallery full view"
                initial={{ rotateY: 70, opacity:  microorganism0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -70, opacity: 0 }}
                transition={{ type: "spring", stiffness: 90, damping: 20 }}
                className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-4xl"
                onClick={(e) => e.stopPropagation()}
                draggable={false}
              />
            </AnimatePresence>
          </div>

          {/* Counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full text-lg font-medium">
            {index.get() + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}