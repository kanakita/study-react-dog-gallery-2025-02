import { useState } from 'react';
import './App.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Form from '@/components/Form/Form';
import Gallery from '@/components/Gallery/Gallery';

function App() {
  const [urls, setUrls] = useState<string[] | null>(null);

  async function fetchImages(breed: string) {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/12`);
    const data: { status: string; message: string[] | string } = await response.json();

    // message が配列の時だけ値を返し、それ以外は空の配列を返す
    return Array.isArray(data.message) ? data.message : [];
  }

  async function reloadImages(breed: string) {
    const urls = await fetchImages(breed);
    setUrls(urls);
  }

  const breedsList = [
    {
      name: '',
      value: '',
    },
    {
      name: '柴犬',
      value: 'shiba',
    },
    {
      name: '秋田犬',
      value: 'akita',
    },
    {
      name: 'hoge',
      value: 'hoge',
    },
  ];
  return (
    <>
      <Header />

      <Form onFormSubmit={reloadImages} breads={breedsList} />

      {!urls ? (
        <p>選択してください</p>
      ) : urls.length > 0 ? (
        <Gallery items={urls} />
      ) : (
        <p>0件です</p>
      )}
      <Footer />
    </>
  );
}

export default App;
