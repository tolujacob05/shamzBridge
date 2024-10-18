"use client";

import { useEffect, useState } from "react";

interface TypingEffectProps {
  dataPeriod: number;
  dataType: string[];
  className: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  dataPeriod,
  dataType,
  className,
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(200);

  useEffect(() => {
    const tick = () => {
      const i = loopNum % dataType.length;
      const fullTxt = dataType[i];

      setText((prevText) => {
        const updatedText = isDeleting
          ? fullTxt.substring(0, prevText.length - 1)
          : fullTxt.substring(0, prevText.length + 1);

        return updatedText;
      });

      setDelta(isDeleting ? 100 : 200 - Math.random() * 100);

      if (!isDeleting && text === fullTxt) {
        setTimeout(() => setIsDeleting(true), dataPeriod);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => (prevLoopNum + 1) % dataType.length);
        setDelta(500);
      }
    };

    const typingEffect = setInterval(tick, delta);

    return () => clearInterval(typingEffect);
  }, [text, isDeleting, delta, loopNum, dataType, dataPeriod]);

  return (
    <>
      <h1>
        <a
          href="#"
          className={className}
          data-period={dataPeriod}
          data-type={JSON.stringify(dataType)}
        >
          <span className="wrap">{text}</span>
        </a>
      </h1>
    </>
  );
};
export default TypingEffect;
