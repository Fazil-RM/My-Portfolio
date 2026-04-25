
import React from 'react';
import { ViewState } from '../App';
import { Footer as FooterSection } from './ui/footer-section';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <FooterSection onNavigate={onNavigate} />
  );
};

export default Footer;
