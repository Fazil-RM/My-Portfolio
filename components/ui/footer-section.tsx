
'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GithubIcon, InstagramIcon, LinkedinIcon, ArrowUpRight } from 'lucide-react';
import { ViewState } from '../../App';

interface FooterLink {
	title: string;
	view?: ViewState;
	href?: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

interface FooterProps {
	onNavigate: (view: ViewState) => void;
}

const footerLinks: FooterSection[] = [
	{
		label: 'Navigation',
		links: [
			{ title: 'Home', view: 'home' },
			{ title: 'About', view: 'about' },
			{ title: 'Work', view: 'work' },
		],
	},
	{
		label: 'Explore',
		links: [
			{ title: 'Blog', view: 'blog' },
			{ title: 'Guestbook', view: 'guestbook' },
			{ title: 'Uses', view: 'uses' },
			{ title: 'Links', view: 'links' },
		],
	},
	{
		label: 'Legal',
		links: [
			{ title: 'Attribution', view: 'attributes' },
			{ title: 'Privacy Policy', href: '#' },
			{ title: 'Terms of Service', href: '#' },
		],
	},
	{
		label: 'Social',
		links: [
			{ title: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamedfazil2005/', icon: LinkedinIcon },
			{ title: 'GitHub', href: 'https://github.com/Mohamed-Fazil-RM', icon: GithubIcon },
			{ title: 'Instagram', href: 'https://www.instagram.com/__fazil_rm__/', icon: InstagramIcon },
		],
	},
];

export function Footer({ onNavigate }: FooterProps) {
	return (
		<footer className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-[3rem] md:rounded-t-[4.5rem] border-t border-slate-200 dark:border-white/10 bg-[radial-gradient(35%_128px_at_50%_0%,rgba(139,92,246,0.05),transparent)] px-6 py-16 lg:py-24 overflow-hidden mt-20">
			<div className="bg-accent-violet/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-md" />

			<div className="grid w-full gap-12 xl:grid-cols-3 xl:gap-16">
				<AnimatedContainer className="space-y-6">
					<p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs leading-relaxed font-medium">
						Crafting high-performance digital solutions with a focus on aesthetics and scalability.
					</p>
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => onNavigate('contact')}
                            className="text-sm font-bold text-slate-900 dark:text-white hover:text-accent-violet transition-colors flex items-center group"
                        >
                            Get in touch
                            <ArrowUpRight className="ml-1.5 size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent-violet" />
                        </button>
                    </div>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-2 gap-10 md:grid-cols-4 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-600 mb-6">{section.label}</h3>
								<ul className="text-slate-600 dark:text-slate-400 space-y-4 text-sm font-medium">
									{section.links.map((link) => (
										<li key={link.title}>
                                            {link.view ? (
                                                <button
                                                    onClick={() => onNavigate(link.view!)}
                                                    className="hover:text-slate-900 dark:hover:text-white inline-flex items-center transition-all duration-300 group"
                                                >
                                                    {link.title}
                                                    <ArrowUpRight className="ml-1 size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent-violet" />
                                                </button>
                                            ) : (
                                                <a
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-slate-900 dark:hover:text-white inline-flex items-center transition-all duration-300 group"
                                                >
                                                    {link.icon && <link.icon className="me-2 size-4 text-slate-400 group-hover:text-accent-violet transition-colors" />}
                                                    {link.title}
                                                </a>
                                            )}
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>

            <div className="w-full pt-16 mt-16 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                    © {new Date().getFullYear()} Mohamed Fazil. All rights reserved.
                </p>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Available for Work</span>
                </div>
            </div>
            
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-violet/5 blur-[120px] rounded-full pointer-events-none" />
		</footer>
	);
}

type ViewAnimationProps = {
	key?: string | number;
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children?: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: 12, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
