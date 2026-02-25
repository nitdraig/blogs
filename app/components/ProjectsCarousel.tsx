"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/lib/projects";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const DURATION_MS = 25000;
const STEP_PERCENT = 20;

export function ProjectsCarousel() {
  const duplicated = [...projects, ...projects];
  const [position, setPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const startRef = useRef<number>(0);
  const rafRef = useRef<number>(0);
  const positionRef = useRef(0);
  positionRef.current = position;

  const goLeft = useCallback(() => {
    const newPos = Math.max(-50, positionRef.current - STEP_PERCENT);
    setPosition(newPos);
    startRef.current = performance.now() - (Math.abs(newPos) / 50) * DURATION_MS;
  }, []);

  const goRight = useCallback(() => {
    const current = positionRef.current;
    const next = current + STEP_PERCENT;
    const newPos = next > 0 ? -50 + (next % 50) : next;
    setPosition(newPos);
    startRef.current = performance.now() - (Math.abs(newPos) / 50) * DURATION_MS;
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = (elapsed % DURATION_MS) / DURATION_MS;
      setPosition(-50 * progress);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isHovered]);

  useEffect(() => {
    if (isHovered)
      startRef.current =
        performance.now() - (Math.abs(positionRef.current) / 50) * DURATION_MS;
  }, [isHovered]);

  return (
    <div
      className="w-full overflow-hidden py-2 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          goLeft();
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 shadow-md border border-gray-200 text-gray-700 hover:bg-white hover:shadow-lg transition-all"
        aria-label="Anterior"
      >
        <FaChevronLeft className="text-lg" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          goRight();
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 shadow-md border border-gray-200 text-gray-700 hover:bg-white hover:shadow-lg transition-all"
        aria-label="Siguiente"
      >
        <FaChevronRight className="text-lg" />
      </button>

      <div className="px-12">
        <div
          className="flex w-[200%] transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${position}%)` }}
        >
          {duplicated.map((project, index) => (
            <a
              key={`${project.name}-${index}`}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-shrink-0 w-[10%] flex-col items-center px-3 py-2 rounded-lg transition-colors hover:bg-gray-100/80"
            >
              <img
                src={project.image}
                alt={`${project.name} Icon`}
                className="mb-2 w-14 h-14 object-contain"
              />
              <strong className="uppercase text-xs sm:text-sm text-center leading-tight">
                {project.name}
              </strong>
              <span className="text-xs text-gray-600 text-center line-clamp-2 mt-0.5">
                {project.description}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
