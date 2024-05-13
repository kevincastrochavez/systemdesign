import React from 'react';
import { Sidebar } from 'flowbite-react';
import { IconArrowLeft } from '@tabler/icons-react';

function Home() {
  return (
    <Sidebar aria-label='Default sidebar example'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href='#' icon={IconArrowLeft}>
            Dashboard
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default Home;
