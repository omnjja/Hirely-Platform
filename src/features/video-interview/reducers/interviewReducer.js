import { PHASES } from "@/constants/videoInterview";

export function createInitialState({ totalQuestions, retakesAllowed }) {
  return {
    step: 1,
    totalQuestions,
    phase: PHASES.PREPARING,
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
    case "SUBMIT_ANSWER": {
      if (state.phase !== PHASES.REVIEW) return state;
      const nextStep = state.step + 1;
      const isLast = nextStep > state.totalQuestions;
      return {
        ...state,
        step: isLast ? state.step : nextStep,
        phase: isLast ? PHASES.SUBMITTED : PHASES.PREPARING,
        retakesLeft: isLast ? state.retakesLeft : state.retakesAllowed,
      };
    }

    default:
      return state;
  }
}
