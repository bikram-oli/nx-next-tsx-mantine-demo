import React, { useState } from 'react';
import  logo  from '../assets/images/logo.png';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Center,
  Container,
  Image,
} from '@mantine/core';

interface props{
  logo: ImageData;
}

 function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Text>Application navbar</Text>
          <Navbar.Section>Navbar section 1</Navbar.Section>
          <Navbar.Section>Navbar section 2</Navbar.Section>
          <Navbar.Section>Navbar section 3</Navbar.Section>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md" className="text-center">
          Application footer
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Image
              width={100}
              height={50}
              fit="contain"
              src="../assets/images/logo.png"
            />
            <Text className="fs-5 font-weight-bold">Bikram</Text>
          </div>                 
        </Header>
      }
    >
      <Container>
        <Center>
          <Text>Resize app to see responsive navbar in action</Text>
        </Center>
      </Container>
    </AppShell>
  );
}
export default AppShellDemo;
