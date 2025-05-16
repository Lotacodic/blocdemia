import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "../Button";
import { IoClose } from "react-icons/io5";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import certificate from "@/assets/images/certificate.png";

interface Option {
  value: string;
  isCorrect: boolean;
}

interface QuizItem {
  question: string;
  options?: Option[];
}

interface Score {
  step: number;
  isCorrect: boolean;
}

const Quiz = ({ quiz, title }: { quiz: QuizItem[]; title: string }) => {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Score[]>([]);
  const [percentageScore, setPercentageScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleScore = (questionIndex: number, isCorrect: boolean) => {
    setScores((prev) => {
      const exists = prev.find((e) => e.step === questionIndex);
      return exists
        ? prev.map((e) => (e.step === questionIndex ? { ...e, isCorrect } : e))
        : [...prev, { step: questionIndex, isCorrect }];
    });
  };

  const calculateScore = () => {
    const total = scores.filter((s) => s.isCorrect).length;
    const percent = Math.round((total / quiz.length) * 100);
    setPercentageScore(percent);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setStep(0);
    setScores([]);
    setPercentageScore(0);
    setShowResult(false);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button text="Start quiz" size="fit" withArrow />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-[#000]/80 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[769px] -translate-x-1/2 -translate-y-1/2 rounded-[16px] bg-[#222] p-[25px] focus:outline-none data-[state=open]:animate-contentShow">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-[17px] font-medium">
              {decodeURIComponent(title)}
            </Dialog.Title>
            <Dialog.Close asChild>
              <IoClose
                color="#E95959"
                fontSize={16}
                className="cursor-pointer"
                onClick={resetQuiz}
              />
            </Dialog.Close>
          </div>

          {showResult ? (
            <>
              <h3 className="text-[#CA99FF] text-lg font-semibold my-5 text-center">
                {percentageScore >= 80 ? "Congratulations champ!" : "Hmmm!"}
              </h3>
              <p className="text-base text-center font-medium mb-10 max-w-[450px] mx-auto">
                {percentageScore >= 80
                  ? `You aced the quiz. You scored ${percentageScore}% and earned an NFT certificate.`
                  : `You scored ${percentageScore}%. One more attempt left.`}
              </p>

              {percentageScore >= 80 ? (
                <>
                  <Image
                    src={certificate}
                    width={200}
                    height={281.94}
                    alt="NFT certificate"
                    className="mb-10 mx-auto"
                    unoptimized
                  />
                  <div className="mx-auto w-[284px]">
                    <Button
                      text="Mint certificate"
                      withArrow
                      rotateIcon
                      onClick={() => {}}
                      disabled
                    />
                    <span className="text-xs text-center block">
                      Minting not available yet
                    </span>
                  </div>
                </>
              ) : (
                <div className="flex gap-5 w-full px-5">
                  <Button
                    text="Retake the quiz"
                    className="!w-full"
                    variant="outline"
                    onClick={resetQuiz}
                  />
                  <Dialog.Close asChild>
                    <Button
                      text="Watch the course"
                      className="!w-full"
                      onClick={() => {}}
                    />
                  </Dialog.Close>
                </div>
              )}
            </>
          ) : (
            <>
              <h3 className="text-[#CA99FF] text-lg font-semibold my-5">
                Question {step + 1}/{quiz.length}
              </h3>
              <h4 className="text-base font-medium mb-6">
                {quiz[step]?.question}
              </h4>
              <ul className="space-y-4 mb-6">
                {quiz[step]?.options?.map((e) => (
                  <li
                    key={e.value}
                    className="flex items-center gap-3"
                    onClick={() => handleScore(step, e.isCorrect)}
                  >
                    <input
                      type="radio"
                      name={`q-${step}`}
                      id={`q-${step}-${e.value}`}
                      className="w-[18px] h-[18px]"
                    />
                    <label
                      htmlFor={`q-${step}-${e.value}`}
                      className="font-normal text-base"
                    >
                      {e.value}
                    </label>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-8 mb-10">
                <button
                  className="border rounded-3xl h-[50px] px-6 py-3 text-white disabled:text-[#7e7e7e] disabled:bg-[#323232] disabled:border-[#323232]"
                  disabled={step === 0}
                  onClick={() => setStep((s) => s - 1)}
                >
                  <FaArrowLeftLong />
                </button>
                <button
                  className="border rounded-3xl h-[50px] px-6 py-3 text-white disabled:text-[#7e7e7e] disabled:bg-[#323232] disabled:border-[#323232]"
                  disabled={step === quiz.length - 1}
                  onClick={() => setStep((s) => s + 1)}
                >
                  <FaArrowRightLong />
                </button>
              </div>

              <div className="flex justify-end">
                <Button
                  text="Submit"
                  size="fit"
                  withArrow
                  onClick={calculateScore}
                  disabled={step + 1 !== quiz.length}
                />
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Quiz;
