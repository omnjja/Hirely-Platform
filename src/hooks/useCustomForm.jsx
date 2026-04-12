import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const useCustomForm = ({ defaultValues = {}, schema, mode = "onSubmit" }) => {
  return useForm({
    defaultValues,
    resolver: zodResolver(schema),
    mode: mode,
  });
};

export default useCustomForm;
