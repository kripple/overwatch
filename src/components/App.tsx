import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Theme } from '@/components/Theme';

import '@/components/app.css';

export function App() {
  const id = 'theme-toggle';

  return (
    <Theme id={id}>
      <Header id={id} />
      <main className="main"></main>
      <Footer />
    </Theme>
  );
}
