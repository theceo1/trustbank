// src/components/layout/withSidebar.tsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Layout from './Layout';

const withSidebar = (WrappedComponent: React.FC) => {
  const ComponentWithSidebar: React.FC = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
      <Layout>
        <div className="flex">
          <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
          <div className="flex-grow">
            <WrappedComponent {...props} />
          </div>
        </div>
      </Layout>
    );
  };
  return ComponentWithSidebar;
};

export default withSidebar;