import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import React from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill all the fields");
      return;
    }
    console.log(name, email, message);
    alert("Message Sent");
    setEmail("");
    setName("");
    setMessage("");
    return;
  };

  return (
    <div id="contact" className="mb-10 ">
      <div className="text-4xl font-bold my-5 text-center text-transparent bg-clip-text bg-gradient-to-tr to-blue-600 from-purple-500">
        Contact Us
      </div>
      <div className="relative mx-auto w-5/6 md:w-4/6 lg:w-3/6 rounded-2xl bg-gradient-to-tr transform duration-500 from-blue-500 to-purple-500 p-1 hover:shadow-xl">
        <form className=" bg-white p-7 rounded-xl ">
          <p className="mb-2">Name* :</p>
          <Input
            className="mb-2"
            value={name}
            variant="bordered"
            onChange={(e) => setName(e.target.value)}
          />
          <p className="mb-2">Email* :</p>
          <Input
            className="mb-2"
            value={email}
            type="email"
            isInvalid={isInvalid}
            variant="bordered"
            color={isInvalid ? "danger" : "success"}
            errorMessage="Please enter a valid email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="mb-2">Message* :</p>
          <Textarea
            className="mb-4"
            value={message}
            variant="bordered"
            onChange={(e) => setMessage(e.target.value)}
          />

        <button onClick={handleSubmit} className=" text-large border-large w-full border-blue-600 text-blue-600 rounded-xl font-bold py-2 px-4 hover:text-white hover:bg-blue-600 transform duration-500">
            Submit
        </button>

          {/* <Button
            className="w-full"
            color="primary"
            variant="solid"
            onClick={handleSubmit}
          >
            {" "}
            Submit{" "}
          </Button> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
