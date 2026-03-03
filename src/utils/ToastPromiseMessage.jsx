import React from 'react'
import toast from "react-hot-toast";

const ToastPromiseMessage = (promise, { loading, success, error }) => {
  return toast.promise(promise, {
    loading: loading || "Loading... ⏳",
    success: success || "Success ✅",
    error:
      error ||
      ((err) => err.response?.data?.message || "Something went wrong ❌"),
  });
}

export default ToastPromiseMessage
