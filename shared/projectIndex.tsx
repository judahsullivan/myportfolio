import { VStack, SimpleGrid } from '@chakra-ui/react'
import { AnimateSharedLayout } from 'framer-motion'
import Header from './header'
import { MotionBox } from './motion'
import ProjectCard from './projectCard'



interface ProjectsProps {
  projects: project[]
}

const ORANGE = '#ff9400'

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <VStack align="start" spacing={8}>
      <Header underlineColor={ORANGE} mt={0} mb={0}>
        Projects
      </Header>
      <AnimateSharedLayout>
        <SimpleGrid columns={1} spacing={4} mt={5} w="100%">
          {projects.map((project, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <ProjectCard
                title={project.title}
                description={project.desc}
                path={project.path}
                link={project.link}
                technologies={project.technologies}
              />
            </MotionBox>
          ))}
        </SimpleGrid>
      </AnimateSharedLayout>
    </VStack>
  )
}

export default Projects
