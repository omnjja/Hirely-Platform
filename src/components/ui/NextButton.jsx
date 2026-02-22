import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const NextButton = ({ text = "Next", to, onClick, disabled = false }) => {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    if (disabled) return;

    if (onClick) {
      await onClick(e);
    }

    if (to) {
      navigate(to);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="
        flex
        items-center
        gap-2
        text-gray-500
        text-sm
        font-medium
        transition
        mb-8
        mx-2
        hover:text-black
        disabled:opacity-40
      "
    >
      <span>{text}</span>
      <ArrowForwardIcon fontSize="small" />
    </button>
  );
};

export default NextButton;
