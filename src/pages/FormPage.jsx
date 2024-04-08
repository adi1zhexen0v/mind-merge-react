import { useState } from "react";
import Input from "../components/Input";
import axiosInstance from "../services/axios";

function FormPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  async function createPost(e) {
    e.preventDefault();
    try {
      setIsLoading(true);

      const response = await axiosInstance.post(
        "/posts",
        {
          title,
          text,
          isPublic,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container">
      <h1 className="form-title">Добавить новый пост</h1>
      <Input
        title="Заголовок поста"
        placeholder="Введите заголовок поста"
        value={title}
        setValue={setTitle}
      />
      <Input
        isTextarea={true}
        title="Текст поста"
        placeholder="Введите содержание вашего поста"
        value={text}
        setValue={setText}
      />
      <div className="form-checkbox-box">
        <input
          name="isPublic"
          className="form-checkbox"
          type="checkbox"
          checked={isPublic}
          onChange={() => setIsPublic(!isPublic)}
        />
        <label htmlFor="isPublic">Это публичный пост?</label>
      </div>
      <button disabled={isLoading} onClick={createPost} className="form-btn">
        {isLoading ? "Загрузка..." : "Создать новый пост"}
      </button>
    </div>
  );
}

export default FormPage;
