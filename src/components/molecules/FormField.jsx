export const FormField = ({ label, id, ...props }) => (
  <div className="w-full">
    <label className="block text-sm text-slate-700">{label}</label>
    <input id={id} className="mt-1 w-full px-3 py-2 border rounded-md" {...props} />
  </div>
);