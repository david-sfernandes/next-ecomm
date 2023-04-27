export default function ColorOption() {
  return (
    <div className="flex gap-4 mt-5 items-center">
      <p className="font-medium mr-2">Cores</p>
      <div className="colorBox">
        <input
          type="radio"
          value="blue"
          id="blue"
          name="color"
          className="colorRadio peer"
        />
        <label
          htmlFor="blue"
          className="colorOption from-blue-700 to-blue-600"
        />
      </div>
      <div className="colorBox">
        <input
          type="radio"
          value="red"
          id="red"
          name="color"
          className="colorRadio peer"
        />
        <label htmlFor="red" className="colorOption from-red-700 to-red-600" />
      </div>
      <div className="colorBox">
        <input
          type="radio"
          value="yellow"
          id="yellow"
          name="color"
          className="colorRadio peer"
        />
        <label
          htmlFor="yellow"
          className="colorOption from-yellow-700 to-yellow-600"
        />
      </div>
      <div className="colorBox">
        <input
          type="radio"
          value="indigo"
          id="indigo"
          name="color"
          className="colorRadio peer"
        />
        <label
          htmlFor="indigo"
          className="colorOption from-indigo-700 to-indigo-600"
        />
      </div>
    </div>
  );
}
