import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import ButtonComponent from "./ButtonComponent";

const ConfirmDialog = ({
  open,
  onClose,
  onConfirm,
  title = "Are you sure?",
  description = "This action cannot be undone.",
  confirmText = "Confirm",
  cancelText = "Cancel",
  isLoading = false,
  danger = true,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2, gap: 1 }}>
        <ButtonComponent
          text={cancelText}
          onClick={onClose}
          disabled={isLoading}
          style={{
            bgColor: "#FFFFFF",
            textColor: "#374151",
            border: "1px solid #D1D5DB",
            hoverBg: "#F9FAFB",
          }}
        />
        <ButtonComponent
          text={isLoading ? "Deleting..." : confirmText}
          onClick={onConfirm}
          disabled={isLoading}
          style={
            danger
              ? {
                  bgColor: "#FFFFFF",
                  textColor: "#EF4444",
                  bold: true,
                  border: "1px solid #FECACA",
                  hoverBg: "#FEE2E2",
                }
              : undefined
          }
        />
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
