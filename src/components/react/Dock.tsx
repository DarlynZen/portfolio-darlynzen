import { Dock as DockContainer, DockIcon } from '@/components/ui/dock';
import type { ReactNode } from 'react';
import briefcaseIcon from '@/assets/briefcase.svg?url';
import codeIcon from '@/assets/code-outline.svg?url';
import homeIcon from '@/assets/home-outline.svg?url';
import mailIcon from '@/assets/mail.svg?url';
import githubIcon from '@/assets/social-github-circular.svg?url';
import linkedinIcon from '@/assets/social-linkedin.svg?url';

const items = [
	{ href: '#inicio', label: 'Inicio', icon: homeIcon },
	{ href: '#experience', label: 'Experiencia', icon: briefcaseIcon },
	{ href: '#proyectos', label: 'Proyectos', icon: codeIcon },
	{ href: '#contacto', label: 'Contacto', icon: mailIcon },
	{ href: 'https://www.linkedin.com/in/darlyn-asmad-chia-0210bb2a3', label: 'LinkedIn', icon: linkedinIcon, external: true },
	{ href: 'https://github.com/DarlynZen', label: 'GitHub', icon: githubIcon, external: true },
];

function DockLink({ href, label, children, active = false, external = false }: { href: string; label: string; children: ReactNode; active?: boolean; external?: boolean }) {
	return (
		<div className="group relative">
			<a href={href} aria-label={label} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className={`grid size-full place-items-center text-blue-gray transition-colors duration-200 hover:text-cold-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cornflower-blue motion-reduce:transition-none ${active ? 'text-cold-white' : ''}`}>
				{children}
			</a>
			<span className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-full border border-dusk-blue/80 bg-light-blue-gray px-4 py-2 font-outfit text-sm font-medium leading-none text-deep-navy opacity-0 shadow-lg transition duration-200 after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-light-blue-gray group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 motion-reduce:transition-none">{label}</span>
		</div>
	);
}

export default function Dock() {
	const renderItem = (item: (typeof items)[number], index: number) => (
		<DockIcon key={item.href} className={index === 0 ? 'border-dusk-blue bg-light-blue-gray/10' : undefined}>
			<DockLink href={item.href} label={item.label} active={index === 0} external={'external' in item && item.external}>
				{typeof item.icon === 'string' ? (
					<img src={item.icon} alt="" className="size-7 object-contain opacity-75 brightness-0 invert transition-[filter,opacity] duration-200 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert" aria-hidden="true" />
				) : (
					<svg viewBox="0 0 24 24" className="size-7" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
						{item.icon}
					</svg>
				)}
			</DockLink>
		</DockIcon>
	);

	return (
		<nav className="pointer-events-none fixed inset-x-0 bottom-4 z-30" aria-label="Navegación principal">
			<DockContainer iconSize={32} iconMagnification={48} iconDistance={100} className="pointer-events-auto relative">
				{items.slice(0, 4).map(renderItem)}
				<span className="mx-1 h-8 w-px shrink-0 bg-dusk-blue/70" aria-hidden="true" />
				{items.slice(4).map(renderItem)}
			</DockContainer>
			</nav>
	);
}
