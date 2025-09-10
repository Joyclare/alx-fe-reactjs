import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter"; // ✅ import Counter

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile 
        name="Joyclare" 
        age={24} 
        bio="Frontend developer in progress 🚀" 
      />
      <Counter /> {/* ✅ use Counter here */}
      <Footer />
    </div>
  );
}

export default App;
