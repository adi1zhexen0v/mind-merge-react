function Input({
  title,
  value,
  setValue,
  placeholder,
  isTextarea = false,
  type = "text",
}) {
  return (
    <div className="input">
      <p className="input-label">{title}</p>
      {isTextarea ? (
        <textarea
          className="input-field"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      ) : (
        <input
          type={type}
          className="input-field"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
}

export default Input;
