import type { ReactNode } from "react";

type FieldProps = {
  label: string;
  children: ReactNode;
  required?: boolean;
};

const Field = ({ label, children, required }: FieldProps) => {
  return (
    <label className="block text-sm text-slate-700 dark:text-slate-200 transition-colors duration-300">
      <span className="flex items-center gap-1">
        {label}
        {required ? <span className="text-midas-gold-soft">*</span> : null}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
};

export default Field;

