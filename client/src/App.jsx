import { useEffect, useState } from "react";
import AppRouter from "./router/AppRouter";
import Loader from "./components/common/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <AppRouter />;
}

export default App;