"use client";

import type {
  GlobalOptions as ConfettiGlobalOptions,
  CreateTypes as ConfettiInstance,
  Options as ConfettiOptions,
} from "canvas-confetti";
import confetti from "canvas-confetti";
import type { ReactNode } from "react";
import React, {
  createContext,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import StarBorder from "@/animations/TextAnimations/StarBorder/StarBorder";
import { PlayCircleIcon } from "lucide-react";

type Api = {
  fire: (options?: ConfettiOptions) => void;
};

type Props = React.ComponentPropsWithRef<"canvas"> & {
  options?: ConfettiOptions;
  globalOptions?: ConfettiGlobalOptions;
  manualstart?: boolean;
  children?: ReactNode;
};

export type ConfettiRef = Api | null;

const ConfettiContext = createContext<Api>({} as Api);

// Define component first
const ConfettiComponent = forwardRef<ConfettiRef, Props>((props, ref) => {
  const {
    options,
    globalOptions = { resize: true, useWorker: true },
    manualstart = false,
    children,
    ...rest
  } = props;
  const instanceRef = useRef<ConfettiInstance | null>(null);

  const canvasRef = useCallback(
    (node: HTMLCanvasElement) => {
      if (node !== null) {
        if (instanceRef.current) return;
        instanceRef.current = confetti.create(node, {
          ...globalOptions,
          resize: true,
        });
      } else {
        if (instanceRef.current) {
          instanceRef.current.reset();
          instanceRef.current = null;
        }
      }
    },
    [globalOptions],
  );

  const fire = useCallback(
    async (opts = {}) => {
      try {
        await instanceRef.current?.({ ...options, ...opts });
      } catch (error) {
        console.error("Confetti error:", error);
      }
    },
    [options],
  );

  const api = useMemo(
    () => ({
      fire,
    }),
    [fire],
  );

  useImperativeHandle(ref, () => api, [api]);

  useEffect(() => {
    if (!manualstart) {
      (async () => {
        try {
          await fire();
        } catch (error) {
          console.error("Confetti effect error:", error);
        }
      })();
    }
  }, [manualstart, fire]);

  return (
    <ConfettiContext.Provider value={api}>
      <canvas ref={canvasRef} {...rest} />
      {children}
    </ConfettiContext.Provider>
  );
});

// Set display name immediately
ConfettiComponent.displayName = "Confetti";

// Export as Confetti
export const Confetti = ConfettiComponent;

interface ConfettiButtonProps extends ButtonProps {
  options?: ConfettiOptions &
    ConfettiGlobalOptions & { canvas?: HTMLCanvasElement };
  children?: React.ReactNode;
}

const ConfettiButtonComponent = ({
  options,
  children,
  ...props
}: ConfettiButtonProps) => {
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const trumpetAudio = new Audio('/audios/birthday-trumpet.wav')
    const parabensAudio = new Audio('/audios/xuxa-parabens.mp3')
    // try {
    //   const rect = event.currentTarget.getBoundingClientRect();
    //   const x = rect.left + rect.width / 2;
    //   const y = rect.top + rect.height / 2;
    //   await confetti({
    //     ...options,
    //     origin: {
    //       x: x / window.innerWidth,
    //       y: y / window.innerHeight,
    //     },
    //   });
    // } catch (error) {
    //   console.error("Confetti button error:", error);
    // }
    fireworkConfetti()
    sideCanonsConfetti()
    trumpetAudio.play()
    parabensAudio.play()
  };

  const fireworkConfetti = () => {
    const duration = 13 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
 
    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;
 
    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();
 
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
 
      const particleCount = 100 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const sideCanonsConfetti = () => {
    const end = Date.now() + 13 * 1000; // 10 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
 
    const frame = () => {
      if (Date.now() > end) return;
 
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });
 
      requestAnimationFrame(frame);
    };
 
    frame();
  };

  return (
    <div className="w-full fixed bottom-5">
    <StarBorder
      as="div"
      className="!block w-full max-w-fit mx-auto"
      childrenContainerCls="bg-gradient-to-b from-zinc-800 to-zinc-900 py-1 px-1 rounded-full"
    >
      <div className="flex items-end gap-3">
        <button  onClick={handleClick} className="cursor-pointer text-white text-sm font-thin bg-transparent hover:bg-zinc-700 duration-200 flex items-center gap-5 sm:gap-2 rounded-full px-3 sm:px-2 py-3" {...props}>
          <PlayCircleIcon color="#fff" strokeWidth={1} className="size-5 text-white" />
          Clique me
        </button>
      </div>
    </StarBorder>
  </div>
  );
};

ConfettiButtonComponent.displayName = "ConfettiButton";

export const ConfettiButton = ConfettiButtonComponent;
