function App() {


  console.log(import.meta.env.VITE_CORE_FRONT_BASE_URL);
  console.log(import.meta.env.VITE_CORE_API_BASE_URL);

  fetch(import.meta.env.VITE_CORE_API_BASE_URL + "/")
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <>
      <h1>Hello World! ㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗ</h1>
    </>
  )
}

export default App
