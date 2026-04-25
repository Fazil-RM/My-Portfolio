'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	// We use different scroll ranges [start, end] for each scale to create a "next next" sequential feel
	const scaleCenter = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale1 = useTransform(scrollYProgress, [0.1, 0.6], [1, 15]);
	const scale2 = useTransform(scrollYProgress, [0.2, 0.7], [1, 15]);
	const scale3 = useTransform(scrollYProgress, [0.3, 0.8], [1, 15]);
	const scale4 = useTransform(scrollYProgress, [0.4, 0.9], [1, 15]);
	const scale5 = useTransform(scrollYProgress, [0.5, 1.0], [1, 15]);
	const scale6 = useTransform(scrollYProgress, [0.0, 0.5], [1, 15]);

	const scales = [scaleCenter, scale1, scale2, scale3, scale4, scale5, scale6];

	return (
		<div ref={container} className="relative h-[800vh]">
			<div className="sticky top-0 h-screen overflow-hidden bg-white dark:bg-black">
				{images.map(({ src, alt }, index) => {
					const scale = scales[index % scales.length];
                    // Fade out as they get too large to create a "tunnel" transition
                    const opacity = useTransform(
                        scale, 
                        [1, 8, 12], 
                        [1, 1, 0]
                    );

					return (
						<motion.div
							key={index}
							style={{ scale, opacity }}
							className={`absolute top-0 flex h-full w-full items-center justify-center ${index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]' : ''} ${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]' : ''} ${index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : ''} ${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''} ${index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : ''} ${index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]' : ''} `}
						>
							<div className={`relative ${index === 0 ? 'h-[40vh] w-[60vw] md:h-[50vh] md:w-[40vw]' : 'h-[25vh] w-[25vw]'} overflow-hidden rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10`}>
								<img
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									className="h-full w-full object-cover"
								/>
                                <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
