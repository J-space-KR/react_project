import { useState } from "react";
import styles from "./InquirePage.module.css";

const initialForm = {
  name: "",
  email: "",
  region: "제품 문의",
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
        <p>CONTACT US</p>
        <h1>궁금한 점을 남겨주세요</h1>
        <span>
          제품, 컬렉션, 협업 등 무엇이든 편하게 남겨주세요.
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
          문의 유형
          <select name="region" value={form.region} onChange={handleChange}>
            <option>제품 문의</option>
            <option>컬렉션 문의</option>
            <option>기타 문의</option>
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

        <button type="submit">문의 보내기</button>

        {isSubmitted && (
          <p className={styles.success}>
            {form.name}님, 문의가 접수되었습니다. 곧 답변드릴게요.
          </p>
        )}
      </form>
    </section>
  );
}

export default InquirePage;
