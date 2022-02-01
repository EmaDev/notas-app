import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from './firebase/config';
import { firebaseContext } from './firebase/context';


import { Login } from './pages/Login';
import { Registrate } from './pages/Registrate';
import { DashboardRoutes } from './routes/DashboardRoutes';
import { PrivateRoute } from './routes/PrivateRoute';


const auth = getAuth(firebaseApp);
function App() {

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {

    onAuthStateChanged(auth, (userFirebase) => {
      if (userFirebase) {
        const data = { ok: true, data: userFirebase };
        setUsuario(data);
      } else {
        setUsuario({ ok: false });
      };
    })
  }, []);

  return (

    <div className='container'>
      <firebaseContext.Provider
         value={{ usuario }}
      >
        <Router>
          <Routes>
            <Route path="/ingresar" element={<Login usuario={usuario} />} />
            <Route path="/registrate" element={<Registrate usuario={usuario} />} />

            <Route path="/*" element={
              <PrivateRoute>
                <DashboardRoutes />
              </PrivateRoute>
            } />
          </Routes>
        </Router>
      </firebaseContext.Provider>
    </div>

  );
}

export default App;
