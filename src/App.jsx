import './App.css';
import { JsonPreview } from './cmps/JsonPreview';
import data from './data/data.json';

function App() {
  return (
    <div className="app">
      <JsonPreview data={data} level={1} />
    </div>
  );
}

export default App;
