import MainPage from '../_pages/MainPage';

function App () {
  return (
    <>
  <MainPage title={"MainPage-JSX"}/>
  {MainPage({title: "MainPage-JS"})}
  </>
  );
}

export default App;
