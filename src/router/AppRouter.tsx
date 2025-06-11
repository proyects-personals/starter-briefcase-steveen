import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BriefcaseScreen from '../pages/modules/briefcases/BriefcaseScreen';
import Header from '../layout/header/Header';
import PageWrapperCustom from '../components/common/page/custom/PageWrapperCustom';
import MainWrapperCustom from '../components/common/page/custom/MainWrapperCustom';
import Footer from '../layout/footer/Footer';

const AppRouter: React.FC = () => {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <MainWrapperCustom>
        <Header />
        <PageWrapperCustom>
          <main>
            <Routes>
              <Route path="/" element={<BriefcaseScreen />} />
            </Routes>
          </main>
        </PageWrapperCustom>
        <Footer />
      </MainWrapperCustom>
    </Router>
  );
};

export default AppRouter;
