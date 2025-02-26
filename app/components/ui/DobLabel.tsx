"use client";

export default function DobLabel() {
  return (
    <>
      <label className="input input-bordered flex items-center w-[50%]">
        <input
          type="date"
          name="dob"
          className="grow"
          max="2006-12-31"
          placeholder="Date of Birth"
          onFocus={(e) => {
            e.target.placeholder = "";
          }}
          onBlur={(e) => {
            e.target.placeholder = "Date of Birth";
          }}
        />
      </label>
    </>
  );
}
