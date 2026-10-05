import { useForm } from "react-hook-form";

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
        {/* Destination */}
        <div>
          <input
            type="text"
            placeholder="Destination..."
            className="w-full rounded-md bg-light-gray px-4 py-4"
            {...register("destination", {
              required: "Destination is required",
            })}
          />

          {errors.destination && (
            <p className="mt-1 text-sm text-red-500">
              {errors.destination.message}
            </p>
          )}
        </div>

        {/* Start Date */}
        <div>
          <input
            type="date"
            className="w-full rounded-md bg-light-gray px-4 py-4"
            {...register("startDate", {
              required: "Start date is required",
            })}
          />

          {errors.startDate && (
            <p className="mt-1 text-sm text-red-500">
              {errors.startDate.message}
            </p>
          )}
        </div>

        {/* End Date */}
        <div>
          <input
            type="date"
            className="w-full rounded-md bg-light-gray px-4 py-4"
            {...register("endDate", {
              required: "End date is required",
            })}
          />

          {errors.endDate && (
            <p className="mt-1 text-sm text-red-500">
              {errors.endDate.message}
            </p>
          )}
        </div>

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
