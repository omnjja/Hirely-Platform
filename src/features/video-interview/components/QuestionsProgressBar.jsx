import { motion } from "framer-motion";

const QuestionsProgressBar = ({ questions, step }) => {
  return (
    <div className="px-0 sm:px-2 md:px-4 lg:px-6">
      {/* Header */}
      <div className="mb-6 flex items-center gap-4">
        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0576D6] sm:text-xs">
          Step {step + 1} of {questions?.length}
        </span>

        <div className="flex flex-1 gap-2">
          {questions?.map((_, index) => {
            const completed = index < step;
            const current = index === step;

            return (
              <motion.div
                key={index}
                layout
                className={`relative flex-1 overflow-hidden rounded-full bg-gray-200 ${
                  current ? "h-2" : "h-1.5"
                }`}
              >
                <motion.div
                  initial={false}
                  animate={{ width: completed ? "100%" : "0%" }}
                  transition={{ type: "spring", stiffness: 180, damping: 22 }}
                  className="absolute inset-y-0 left-0 rounded-full bg-[#0576D6]"
                />

                {current && (
                  <motion.div
                    animate={{ opacity: [0.15, 0.35, 0.15] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full bg-[#0576D6]"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Question */}
      <motion.h2
        key={step}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-4xl text-xl font-semibold leading-snug text-gray-900 sm:text-2xl"
      >
        "{questions?.[step]?.question}"
      </motion.h2>
    </div>
  );
};

export default QuestionsProgressBar;
