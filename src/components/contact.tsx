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
    setEmail("");
    setName("");
    setMessage("");
    return;
  };

  return (
    <div id="contact" className="mb-10">
      <div className="text-4xl font-bold text-center my-4">Contact Us</div>
      <form className=" ml-auto mr-auto w-5/6 lg:w-3/6 md:w-4/6 bg-blue-300 p-4 rounded-lg shadow-md ">
        <p className="mb-2">Name* :</p>
        <Input
          className="mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="mb-2">Email* :</p>
        <Input
          className="mb-2"
          value={email}
          type="email"
          isInvalid={isInvalid}
          color={isInvalid ? "danger" : "success"}
          errorMessage="Please enter a valid email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="mb-2">Message* :</p>
        <Textarea
          className="mb-4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button className="w-full" color="primary" onClick={handleSubmit}>
          {" "}
          Submit{" "}
        </Button>
      </form>
    </div>
  );
};

export default Contact;
