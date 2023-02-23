import * as React from 'react';
import { useState } from 'react';
import {
  Icon,
  VStack,
  HStack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { AiTwotoneThunderbolt, AiOutlineCloudServer } from 'react-icons/ai';
import { BiDesktop } from 'react-icons/bi';
import { GiSpiderWeb } from 'react-icons/gi';
import { SkillProps } from '@/utils/data/interface'
import PageLayout from '@/shared/pageLayout';
import SkillCard from '@/shared/skillscard';
import { container, PageSlideFade } from '@/shared/transitions'
import Section from '@/shared/section';
import { MotionBox } from '@/shared/motion';
import Header from '@/shared/header';

const tabList = [
  {
    name: 'All',
    filterName: '',
    icon: AiTwotoneThunderbolt
  },
  {
    name: 'Web Development',
    filterName: 'development',
    icon: BiDesktop
  },
  {
    name: 'Web Design',
    filterName: 'design',
    icon: GiSpiderWeb
  },
  {
    name: 'Tools',
    filterName: 'tools',
    icon: AiOutlineCloudServer
  }
];

const TechStack: NextPage<SkillProps> = ({ skills }) => {
  const [skillsList, setSkillsList] = useState([]);

  React.useEffect(() => {
    setSkillsList(skills);
  }, []);

  const filterSkills = (tab) => {
    if (tab.length) setSkillsList(skills.filter((skill) => skill.type === tab));
    else setSkillsList(skills);
  };

  return (
    <PageLayout title="Tech-Stack" keywords=" Next, react, javascript, typescript">
      <PageSlideFade>
        <VStack spacing={8}>
          <Section>
            <VStack>
              <Header mt={0} mb={1}>
                Tech Stack
              </Header>
              <Text
                fontSize={'xl'}
                color={useColorModeValue('gray.500', 'gray.200')}
                maxW="lg"
                textAlign="center"
              >
                A list of my favorite tools and technologies that I use on a regular basis.
              </Text>
            </VStack>
          </Section>
          <Section zIndex={5}>
            <Tabs variant="soft-rounded" colorScheme="blue" align="center" w="100%">
              <TabList display="flex" flexWrap="wrap">
                {tabList.map((tab, index) => (
                  <Tab
                    bg={useColorModeValue('gray.100', 'gray.800')}
                    color={useColorModeValue('gray.600', 'gray.500')}
                    _selected={{
                      color: 'white',
                    }}
                    mr={2}
                    mt={2}
                    onClick={() => filterSkills(tab.filterName)}
                    key={index}
                  >
                    <HStack spacing={1}>
                      <Icon as={tab.icon} />
                      <Text>{tab.name}</Text>
                    </HStack>
                  </Tab>
                ))}
              </TabList>
              <TabPanels minHeight={'45vh'}>
                <TabPanel px={0}>
                  <MotionBox
                    variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // platform={"web"}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // platform={"web"}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // platform={"web"}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // platform={"web"}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Section>
        </VStack>
      </PageSlideFade>
    </PageLayout>
  );
};


export default TechStack;
export { getServerSideProps } from 'shared/chakraSSR'
