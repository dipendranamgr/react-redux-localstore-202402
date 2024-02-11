
import { Toaster } from 'react-hot-toast';
import './App.css';
import { AppContent } from './backupcdrcomponents/components/AppContent';
import AppHeader from './backupcdrcomponents/components/AppHeader';
import PageTitle from './backupcdrcomponents/components/PageTitle';

function App() {

  
  return (
    <div className="App">
      <PageTitle>Page Title</PageTitle>
      <AppHeader/>
      <AppContent></AppContent>
      <Toaster position='right-bottom'/>
    </div>
  );
}

export default App;
