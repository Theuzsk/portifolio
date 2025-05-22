import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDatabase, 
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAws
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiStyledcomponents,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiVsco,
  SiPostman,
  SiLua,
  SiRoblox
} from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
`;

const SkillCard = styled(Paper)`
  padding: 2rem;
  text-align: center;
  background: rgba(45, 45, 45, 0.5) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const MotionSkillCard = motion(SkillCard);

const IconWrapper = styled(motion.div)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #7289da;
`;

const Skills: React.FC = () => {
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: <FaReact /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'Styled Components', icon: <SiStyledcomponents /> },
        { name: 'JavaScript', icon: <FaJs /> }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> }
      ]
    },
    {
      category: 'Desenvolvimento de Jogos',
      items: [
        { name: 'Lua', icon: <SiLua /> },
        { name: 'Roblox Studio', icon: <SiRoblox /> },
        { name: 'Desenvolvimento Roblox', icon: <SiRoblox /> }
      ]
    },
    {
      category: 'Ferramentas',
      items: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'VS Code', icon: <SiVsco /> },
        { name: 'Figma', icon: <FaFigma /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'AWS', icon: <FaAws /> }
      ]
    }
  ];

  return (
    <SkillsSection id="habilidades">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Minhas Habilidades
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)'
            },
            gap: 3,
            mt: 4
          }}
        >
          {skills.map((skillGroup, index) => (
            <MotionSkillCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Typography variant="h5" component="h3" gutterBottom>
                {skillGroup.category}
              </Typography>
              {skillGroup.items.map((skill, skillIndex) => (
                <Box key={skillIndex} mb={1.2}>
                  <IconWrapper
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {skill.icon}
                  </IconWrapper>
                  <Typography variant="body1">
                    {skill.name}
                  </Typography>
                </Box>
              ))}
            </MotionSkillCard>
          ))}
        </Box>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 