import { useState } from "react";

const Contact = () => {
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    let validationError = {};

    if (formData.get("name") === "") {
      validationError.name = "Name is required.";
    }

    if (formData.get("email") === "") {
      validationError.email = "email is required.";
    }
    if (formData.get("message") === "") {
      validationError.message = "message is required.";
    }

    if (Object.keys(validationError).length > 0) {
      setErrors(validationError);
    } else {
      console.log("summbit");
    }
  }

  return (
    <div className="flex justify-center items-center">
      <div className="  w-[900px]">
        <div className="py-5 font-semibold border-b">
          <h3>CONTACT INFORMATION</h3>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 py-3">
            <div className=" flex  justify-between gap-4">
              <div className="flex flex-col gap-1 w-[50%]">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  className={`py-2 px-1 w-full border outline-none rounded ${errors.name ? "border-red-400" : ""}`}
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              <div className="flex flex-col gap-1 w-[50%]">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  className={`py-2 px-1 w-full border outline-none rounded ${errors.email ? "border-red-400" : ""}`}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full h-[200px]">
              <label htmlFor="">Message</label>

              <textarea
                name="message"
                id=""
                placeholder="Please Describe Your Message"
                className={`py-2 px-1 w-full border outline-none rounded ${errors.message ? "border-red-400" : ""}`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </div>
            <div className="border-t py-5 mt-5  ">
              <button className="bg-blue-600 text-white px-10 py-2 rounded-md">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
