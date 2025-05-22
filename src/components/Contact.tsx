import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
`;

const ContactCard = styled(Paper)`
  padding: 2rem;
  text-align: center;
  background: rgba(45, 45, 45, 0.5) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const MotionContactCard = motion(ContactCard);

const SocialIcon = styled.a`
  color: #7289da;
  font-size: 2rem;
  margin: 0 1rem;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    color: #43b581;
  }
`;

const MotionSocialIcon = motion(SocialIcon);

const Contact: React.FC = () => {
  return (
    <ContactSection id="contato">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Entre em Contato
          </Typography>
        </motion.div>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="300px"
        >
          <MotionContactCard
            elevation={3}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography variant="h5" gutterBottom>
              Vamos trabalhar juntos!
            </Typography>
            <Typography variant="body1" paragraph>
              Estou sempre disponível para novos projetos e oportunidades.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Discord: Theus.zk
            </Typography>

            <Box mt={4}>
              <MotionSocialIcon
                href="https://discord.com/users/960343374727114752"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaDiscord />
              </MotionSocialIcon>
              <MotionSocialIcon
                href="https://github.com/Theuzsk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </MotionSocialIcon>
              <MotionSocialIcon
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </MotionSocialIcon>
            </Box>
          </MotionContactCard>
        </Box>
      </Container>
    </ContactSection>
  );
};

export default Contact; 