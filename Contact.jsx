import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    message: ""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/api/contact",
        {

          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)

        }
      );

      const data = await response.json();

      alert(data.message);

      setFormData({

        name: "",
        email: "",
        message: ""

      });

    }

    catch (error) {

      console.log(error);

    }

  };

  return (

    <section id="contact" className="contact">

      <h2>Contact Me</h2>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Enter Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="btn">

          Send Message

        </button>

      </form>

    </section>
  );
}

export default Contact;