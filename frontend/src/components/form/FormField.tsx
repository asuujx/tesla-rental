import { FormFieldProps } from "../../../types";

const FormField: React.FC<FormFieldProps> = ({
   type,
   name,
   register,
   error,
}) => (
   <>
      <input
         type={type}
         {...register(name, { required: true })}
         className="px-4 py-2 border border-slate-400 rounded-md"
      />
      {error && <span className="text-red-500">{error.message}</span>}
   </>
);
export default FormField;
