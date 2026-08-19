import { useState } from "react";
import styles from "./InquirePage.module.css";

const initialForm = {
  name: "",
  email: "",
  region: "Mediterranean",
  message: "",
};

function InquirePage() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    // input의 name과 value를 이용하면 여러 입력창을 한 함수로 바꿀 수 있어요.
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className={styles.page}>
      <div className={styles.intro}>
        <p>BEGIN YOUR JOURNEY</p>
        <h1>Let&apos;s plan something extraordinary</h1>
        <span>
          이 페이지는 실제 전송 API가 없는 React 폼 이에요. 입력값은
          useState로 관리합니다.
        </span>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="이름을 입력하세요"
            required
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="hello@example.com"
            required
          />
        </label>

        <label>
          Preferred region
          <select name="region" value={form.region} onChange={handleChange}>
            <option>Mediterranean</option>
            <option>Caribbean</option>
          </select>
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="궁금한 내용을 적어 주세요"
          />
        </label>

        <button type="submit">SEND INQUIRY</button>

        {isSubmitted && (
          <p className={styles.success}>
            {form.name}님, 문의가 저장되었습니다. (수업용 화면입니다.)
          </p>
        )}
      </form>
    </section>
  );
}

export default InquirePage;
