import { PHASES } from "@/constants/videoInterview";

export function createInitialState({
  totalQuestions,
  retakesAllowed,
  currentStep,
}) {
  const step = currentStep ?? 0;
  const isComplete = step >= totalQuestions;
  return {
    step: isComplete ? totalQuestions - 1 : step,
    totalQuestions,
    phase: isComplete ? PHASES.SUBMITTED : PHASES.PREPARING,
    retakesAllowed,
    retakesLeft: retakesAllowed,
  };
}

export function interviewReducer(state, action) {
  switch (action.type) {
    //  countdown 0 -> start recording
    case "PREP_FINISHED":
      if (state.phase !== PHASES.PREPARING) return state;
      return { ...state, phase: PHASES.RECORDING };

    // stop or reached max duration
    case "STOP_RECORDING":
      if (state.phase !== PHASES.RECORDING) return state;
      return { ...state, phase: PHASES.REVIEW };

    // retake
    case "RETAKE": {
      if (state.phase !== PHASES.REVIEW) return state;
      if (state.retakesLeft <= 0) return state; // out of retakes, ignore
      return {
        ...state,
        phase: PHASES.PREPARING,
        retakesLeft: state.retakesLeft - 1,
      };
    }

    // submit or finish
    case "SUBMIT_START":
      if (state.phase !== PHASES.REVIEW) return state;
      return { ...state, phase: PHASES.SUBMITTING };

    case "SUBMIT_ANSWER": {
      if (state.phase !== PHASES.SUBMITTING) return state; // now gated on SUBMITTING, not REVIEW
      const nextStep = state.step + 1;
      const isLast = nextStep >= state.totalQuestions;
      return {
        ...state,
        step: isLast ? state.step : nextStep,
        phase: isLast ? PHASES.SUBMITTED : PHASES.PREPARING,
        retakesLeft: isLast ? state.retakesLeft : state.retakesAllowed,
        submitError: null,
      };
    }

    case "SUBMIT_ERROR":
      if (state.phase !== PHASES.SUBMITTING) return state;
      return { ...state, phase: PHASES.REVIEW, submitError: action.error };

    default:
      return state;
  }
}
