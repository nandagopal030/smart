import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddRouteForm from './AddRouteForm';
import { DynamicData } from './DynamicData';

const Router = () => {
  const [customRoutes, setCustomRoutes] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('customRoutes');
    if (stored) setCustomRoutes(JSON.parse(stored));
  }, []);

  return (
    <Routes>
      {/* Static Routes */}
      {DynamicData.map((item, index) =>
        item.children?.length ? (
          <Route path={item.path} key={index}>
            {item.children.map((child, idx) => (
              <Route path={child.path} element={<child.element />} key={idx} />
            ))}
          </Route>
        ) : (
          <Route path={item.path} element={item.element && <item.element />} key={index} />
        )
      )}

      {/* Dynamic Routes from localStorage */}
      {customRoutes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
        />
      ))}

      {/* Add Form Route */}
      <Route path="/add" element={<AddRouteForm />} />
    </Routes>
  );
};

export default Router;
