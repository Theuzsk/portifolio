import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia, Button } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCog } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
`;

const ProjectCard = styled(Card)`
  height: 100%;
  background: rgba(45, 45, 45, 0.5) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const MotionProjectCard = motion(ProjectCard);

const SpinningIcon = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #7289da;
  font-size: 5rem;
`;

const projects = [
  {
    title: 'Projeto 1',
    description: 'Em desenvolvimento...',
    technologies: ['React', 'TypeScript', 'Material-UI'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Projeto 2',
    description: 'Em desenvolvimento...',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Projeto 3',
    description: 'Em desenvolvimento...',
    technologies: ['React Native', 'Firebase'],
    github: '#',
    demo: '#'
  }
];

const Projects: React.FC = () => {
  return (
    <ProjectsSection id="projetos">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Projetos
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)'
            },
            gap: 4,
            mt: 4
          }}
        >
          {projects.map((project, index) => (
            <MotionProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpinningIcon
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <FaCog />
              </SpinningIcon>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Tecnologias: {project.technologies.join(', ')}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                  <Button
                    variant="contained"
                    startIcon={<FaGithub />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    disabled
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<FaExternalLinkAlt />}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    disabled
                  >
                    Demo
                  </Button>
                </Box>
              </CardContent>
            </MotionProjectCard>
          ))}
        </Box>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 