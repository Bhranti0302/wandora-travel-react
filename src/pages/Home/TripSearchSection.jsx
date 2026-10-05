import { useForm } from "react-hook-form";
import FormInput from "../../components/Form/FormInput";

function TripSearchSection() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-[20vh] items-center justify-start bg-secondary-black px-12 py-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-4"
      >
        {/* Destination - Mandatory */}
        <FormInput
          type="text"
          placeholder="Destination..."
          name="destination"
          register={register}
          validation={{
            required: "Destination is required",
          }}
          error={errors.destination}
        />

        {/* Start Date - Optional */}
        <FormInput type="date" name="startDate" register={register} />

        {/* End Date - Optional */}
        <FormInput type="date" name="endDate" register={register} />

        {/* Search */}
        <button
          type="submit"
          className="rounded-md bg-primary-dark px-3 py-3 text-2xl text-white transition-colors duration-300 hover:bg-primary"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default TripSearchSection;
