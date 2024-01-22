import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { UserDetailsPage } from './pages/UserDetailsPage';
import { NotFound } from './pages/NotFound';

import { Main, AppContainer } from './components/styles/styles';
import { Header } from './components/header';
import { Footer } from './components/footer';

function App() {
  return (
    <AppContainer>
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/user/:userId" element={<UserDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
      <Footer />
    </AppContainer>
  );
}

export default App;

// TODOS: Видалити зайві стилі
