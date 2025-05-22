import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaServer } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  position: relative;
  overflow: hidden;
`;

const GradientText = styled.span`
  background: linear-gradient(45deg, #7289da, #43b581);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const IconWrapper = styled(motion.div)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #7289da;
`;

const Hero: React.FC = () => {
  const features = [
    {
      icon: <FaCode />,
      title: 'Desenvolvimento Web',
      description: 'Criação de interfaces modernas e responsivas'
    },
    {
      icon: <FaRobot />,
      title: 'Bots Discord',
      description: 'Desenvolvimento de bots personalizados'
    },
    {
      icon: <FaServer />,
      title: 'Backend',
      description: 'APIs e sistemas robustos'
    }
  ];

  return (
    <HeroSection id="inicio">
      <Container>
        <Box textAlign="center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              Olá, eu sou <GradientText>Matheus</GradientText>
            </Typography>
            <Typography variant="h4" gutterBottom>
              Desenvolvedor Full Stack
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Transformando ideias em código
            </Typography>
          </motion.div>

          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            gap={4}
            mt={8}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <IconWrapper
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {feature.icon}
                </IconWrapper>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </HeroSection>
  );
};

export default Hero; 