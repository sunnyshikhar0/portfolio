import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

const Section = styled.section`
  padding: 3rem 2rem;
  text-align: center;
  margin-top: 5rem;
  background-color: var(--background-color);
`;

const Title = styled.h2`
  font-size: 2rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 2rem auto;
  gap: 1rem;

  input,
  textarea {
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid var(--input-border-color);
    border-radius: 4px;
    background-color: var(--card-bg-color-alt);
    color: var(--text-color);
  }

  button {
    padding: 0.75rem;
    font-size: 1rem;
    background-color: var(--button-bg-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
      background-color: var(--button-hover-bg-color);
    }
  }
`;

const Error = styled.span`
  color: #e53e3e;
  font-size: 0.875rem;
  text-align: left;
`;

function Contact() {
  // Destructure form methods and errors from react-hook-form
  const {
    register, // function to register inputs
    handleSubmit, // function to handle form submission
    reset, // function to reset form values
    formState: { errors }, // object containing validation errors
  } = useForm();

  // Local loading state to control button disable/spinner text
  const [loading, setLoading] = useState(false);

  // Handler for form submission
  const onSubmit = async (data) => {
    setLoading(true); // Start loading

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      toast.success("Message sent successfully!"); // Show success toast
      reset();
      setLoading(false); // Reset loading state
    } catch (error) {
      setLoading(false); // Reset loading state
      console.error("EmailJS error:", error);
      toast.error("Failed to send message."); // Show failed toast
    }
  };

  return (
    <Section>
      <Title>Connect Me</Title>
      <p>You can reach me via this form:</p>

      {/* Hook form handles submission via handleSubmit */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Name input with required validation */}
        <input
          type="text"
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
        />
        {/* Show error if name is invalid */}
        {errors.name && <Error>{errors.name.message}</Error>}

        {/* Email input with pattern validation */}
        <input
          type="email"
          placeholder="Your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
        />
        {/* Show error if email is invalid */}
        {errors.email && <Error>{errors.email.message}</Error>}

        {/* Textarea for the message with required validation */}
        <textarea
          rows="5"
          placeholder="Your Message"
          {...register("message", { required: "Message is required" })}
        ></textarea>
        {/* Show error if message is invalid */}
        {errors.message && <Error>{errors.message.message}</Error>}

        {/* Submit button with loading state */}
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </Form>

      {/* Toast container to display messages at bottom-right */}
      <ToastContainer position="top-center" autoClose={3000} />
    </Section>
  );
}

export default Contact;
