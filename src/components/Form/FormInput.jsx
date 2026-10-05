function FormInput({ type, placeholder, name, register, validation, error }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md bg-light-gray px-4 py-4"
        {...register(name, validation)}
      />

      {error && <p className="mt-2 text-sm text-red-500">{error.message}</p>}
    </div>
  );
}

export default FormInput;
