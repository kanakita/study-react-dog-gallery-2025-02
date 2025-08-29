interface breedsProps {
  name?: string;
  value?: string;
}

interface Props {
  onFormSubmit: (breed: string) => void;
  breads: breedsProps[];
}

export default function Form({ onFormSubmit, breads }: Props) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const breed = formData.get('breed') as string;
    onFormSubmit(breed);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20">
      <label htmlFor="countries" className="block mb-2 font-bold text-gray-900">
        犬種を選択してください
      </label>
      <div className="flex gap-1 items-center">
        <select
          name="breed"
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          {breads.map(({ name, value }) => (
            <option value={value} key={value}>
              {name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Reload
        </button>
      </div>
    </form>
  );
}
