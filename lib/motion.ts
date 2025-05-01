"use client";

import React from "react";

interface MotionProps {
  children: React.ReactNode;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  whileInView?: Record<string, any>;
  transition?: Record<string, any>;
  viewport?: Record<string, any>;
  [key: string]: any;
}

const createMotionComponent = <T extends HTMLElement>(
  Component: keyof JSX.IntrinsicElements
) => {
  return React.forwardRef<T, MotionProps>(
    (
      {
        children,
        initial,
        animate,
        whileInView,
        transition,
        viewport,
        ...props
      },
      forwardedRef
    ) => {
      const [isVisible, setIsVisible] = React.useState(false);
      const localRef = React.useRef<T>(null);
      const ref = (forwardedRef as React.RefObject<T>) || localRef;

      React.useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              if (viewport?.once && ref.current) {
                observer.unobserve(ref.current);
              }
            } else if (!viewport?.once) {
              setIsVisible(false);
            }
          },
          { threshold: 0.1 }
        );

        if (ref.current) {
          observer.observe(ref.current);
        }

        return () => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        };
      }, [viewport?.once, ref]);

      const style = React.useMemo(() => {
        if (whileInView) {
          return {
            ...props.style,
            opacity: isVisible ? whileInView.opacity : initial?.opacity,
            transform: `translateY(${
              isVisible ? whileInView.y : initial?.y
            }px)`,
            transition: `opacity ${transition?.duration || 0.3}s ease-in-out ${
              transition?.delay || 0
            }s, transform ${transition?.duration || 0.3}s ease-in-out ${
              transition?.delay || 0
            }s`,
          };
        }

        if (animate) {
          return {
            ...props.style,
            opacity: animate.opacity,
            transform: `translateY(${animate.y}px)`,
            transition: `opacity ${transition?.duration || 0.3}s ease-in-out ${
              transition?.delay || 0
            }s, transform ${transition?.duration || 0.3}s ease-in-out ${
              transition?.delay || 0
            }s`,
          };
        }

        return props.style;
      }, [props.style, initial, animate, whileInView, isVisible, transition]);

      return React.createElement(
        Component,
        {
          ...props,
          ref,
          style,
        },
        children
      );
    }
  );
};

export const motion = {
  div: createMotionComponent<HTMLDivElement>("div"),
  h1: createMotionComponent<HTMLHeadingElement>("h1"),
  p: createMotionComponent<HTMLParagraphElement>("p"),
};